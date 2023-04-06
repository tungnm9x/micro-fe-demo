import { Component, ElementRef, Inject, NgZone, PLATFORM_ID, ViewChild, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as am5 from '@amcharts/amcharts5';
import {isPlatformBrowser} from '@angular/common';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import * as moment from 'moment';
import { tap } from 'rxjs';
import { loadWeeklyOverview, selectorWeeklyOverview } from '@micro-fe-test/store-sharing';
import { ChannelNameEnum } from '@micro-fe-test/graphql';

export const COLOR = {
  orange: '#F9B619',
  brightTextOrange: '#f5c553',
  white: '#FFFFFF',
  black: '#333333',
  text: '#F9B619',
  brightOrange: '#fab61c',
  direct: '#323332',
  mostPopular: '#2693f3',
  lowestPrice: '#e63d2e',
  match: '#25a645',
  other: '#3791a6'
};

@Component({
  selector: 'micro-fe-test-dashboard-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class RemoteEntryComponent implements OnInit {

  @ViewChild('chart', {static: true}) chart: ElementRef;
  root: am5.Root;
  weeklyTotal;
  totalBooking: number;
  aVRValue: number;
  roomNightsValue: number;
  occValue: number;
  totalYesterdayPickup: number;
  occList = [];
  adrList = [];
  arrivalList = [];
  departureList = [];
  dateWeekList = [];
  currency = '$';

  chartData: {
    dayOfWeek: string;
    ibePercent: number;
    voicePercent: number;
    pmsPercent: number;
    availablePercent: number;
    ibeValue: number;
    voiceValue: number;
    pmsValue: number;
    availableValue: number;
    adr: string;
  }[] = [];

  weeklyOverview$ = this.store.pipe(
    select(selectorWeeklyOverview),
    tap(data => {
      if (data) {
        this.columnLineChart(data);
        // calculate weekly total
        this.calculateWeeklyTotal(data);
      }
    })
  );

  constructor(
    @Inject(PLATFORM_ID) private platformId,
    private store: Store,
    private zone: NgZone,
  ) {}

  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId))
    {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }

  disposeRoot(divId): void {
    am5.array?.each(am5?.registry?.rootElements, (root) => {
      if (root?.dom?.id === divId)
      {
        root?.dispose();
      }
    });
  }

  ngOnInit(): void {
    this.weeklyOverview$.subscribe();
    const fromDate = moment(new Date()).format('YYYY-MM-DD');
    const toDate = moment(new Date()).add(6, 'days').format('YYYY-MM-DD');

    this.store.dispatch(loadWeeklyOverview({
      variables: {
        filter: {
          fromDate,
          toDate,
          hotelCode: 'GVCGNART'
        }
      }
    }));
  }

  calculateWeeklyTotal(data): void {
    let totalIBE = 0;
    let totalVoice = 0;
    let totalPMS = 0;
    let totalAvailableRoom = 0;
    data.forEach(el => {
      totalIBE = el.overviewDailyList.reduce((p, c) => {
        return p + c?.channelList.find(x => x?.channelName === ChannelNameEnum.GauvendiIbe)?.totalRoomSold;
      }, 0);
      totalVoice = data.reduce((p, c) => {
        return p + c.overviewDailyList[0]?.channelList.find(x => x?.channelName === ChannelNameEnum.GauvendiVoice)?.totalRoomSold;
      }, 0);
      totalPMS = data.reduce((p, c) => {
        return p + c.overviewDailyList[0]?.channelList.find(x => x?.channelName === ChannelNameEnum.Pms)?.totalRoomSold;
      }, 0);
      totalAvailableRoom = data.reduce((p, c) => {
        return p + c.overviewDailyList[0]?.availableToSell;
      }, 0);
    });

    this.weeklyTotal = [
      {
        code: ChannelNameEnum.GauvendiIbe,
        value: totalIBE
      },
      {
        code: ChannelNameEnum.GauvendiVoice,
        value: totalVoice
      },
      {
        code: ChannelNameEnum.Pms,
        value: totalPMS
      },
      {
        code: 'Other',
        value: totalAvailableRoom < 0 ? 0 : totalAvailableRoom
      }
    ];
    this.totalBooking = totalIBE + totalVoice + totalPMS;
  }

  columnLineChart(data): void {
    data?.forEach(item => {
      this.aVRValue = item?.totalAverageDailyRate;
      this.roomNightsValue = item?.totalRoomNights;
      this.occValue = Math.round(item?.totalOccupancyRate * 100);
      this.totalYesterdayPickup = item?.totalRoomNightsPickUpFromYesterday;
      this.dateWeekList = item?.overviewDailyList?.map(el => {
        const dayOfWeek = moment(new Date(el?.date)).format('ddd, DD-MMM');
        return dayOfWeek;
      });
      this.adrList = item?.overviewDailyList?.map(el => {
        const adr = `${el?.averageDailyRate.toFixed(2)}`;
        return adr;
      });
      this.occList = item?.overviewDailyList?.map(el => {
        const occ = Math.round(el?.channelList.reduce((p, c) => {
          return p + c?.occupancyRate;
        }, 0) * 100);
        return (occ ? occ : 0) + '%';
      });
      this.arrivalList = item?.overviewDailyList?.map(el => {
        const arrival = el?.totalArrival;
        return (arrival ? arrival : 0);
      });
      this.departureList = item?.overviewDailyList?.map(el => {
        const departure = el?.totalDeparture;
        return (departure ? departure : 0);
      });
      this.chartData = item?.overviewDailyList?.map(el => {
        const occ = Math.round(el?.channelList.reduce((p, c) => {
          return p + c?.occupancyRate;
        }, 0) * 100);
        const dayOfWeek = moment(new Date(el?.date)).format('ddd');
        const ibe = el?.channelList.find(x => x?.channelName === ChannelNameEnum.GauvendiIbe);
        const voice = el?.channelList.find(x => x?.channelName === ChannelNameEnum.GauvendiVoice);
        const pms = el?.channelList.find(x => x?.channelName === ChannelNameEnum.Pms);
        const adr = `$ ${el?.averageDailyRate.toFixed(2)}`;
        const availableRoom = el?.availableToSell > 0 && el?.totalPropertyRooms ? Math.round(el?.availableToSell * 100 / el?.totalPropertyRooms) : 0;
        return {
          dayOfWeek,
          ibePercent: ibe?.occupancyRate ? Math.round(ibe?.occupancyRate * 100) : null,
          voicePercent: voice?.occupancyRate ? Math.round(voice?.occupancyRate * 100) : null,
          pmsPercent: pms?.occupancyRate ? Math.round(pms?.occupancyRate * 100) : null,
          availablePercent: availableRoom,
          ibeValue: ibe?.totalRoomSold ? ibe?.totalRoomSold : null,
          voiceValue: voice?.totalRoomSold ? voice?.totalRoomSold : null,
          pmsValue: pms?.totalRoomSold ? pms?.totalRoomSold : null,
          availableValue: el?.availableToSell ? el?.availableToSell : 0,
          adr,
          occ,
          ibeTotalAdults: ibe?.totalAdults ? ibe?.totalAdults : 0,
          ibeTotalKids: ibe?.totalKids ? ibe?.totalKids : 0,
          ibeAverageDailyRate: ibe?.averageDailyRate ? ibe?.averageDailyRate : 0,
          pmsTotalAdults: pms?.totalAdults ? pms?.totalAdults : 0,
          pmsTotalKids: pms?.totalKids ? pms?.totalKids : 0,
          pmsAverageDailyRate: pms?.averageDailyRate ? pms?.averageDailyRate : 0,
          voiceTotalAdults: voice?.totalAdults ? voice?.totalAdults : 0,
          voiceTotalKids: voice?.totalKids ? voice?.totalKids : 0,
          voiceAverageDailyRate: voice?.averageDailyRate ? voice?.averageDailyRate : 0,
          totalYesterdayPickup: el?.totalRoomNightsPickUpFromYesterday,
          totalAdults: (ibe?.totalAdults || 0) + (pms?.totalAdults || 0) + (voice?.totalAdults || 0),
          totalKids: (ibe?.totalKids || 0) + (pms?.totalKids || 0) + (voice?.totalKids || 0),
          totalRoomSold: (ibe?.totalRoomSold || 0) + (pms?.totalRoomSold || 0) + (voice?.totalRoomSold || 0)
        };
      });
    });
    const crr = '$';
    this.browserOnly(() => {
      this.disposeRoot('chart');
      const root = am5.Root.new(this.chart?.nativeElement);

      root.setThemes([am5themes_Animated.new(root)]);

      const chart = root.container.children.push(
        am5xy.XYChart.new(root, {
          panX: false,
          panY: false,
          // wheelX: 'panX',
          // wheelY: 'zoomX',
          layout: root.verticalLayout
        })
      );

      const data = this.chartData;

      const xAxis = chart.xAxes.push(
        am5xy.CategoryAxis.new(root, {
          categoryField: 'dayOfWeek',
          renderer: am5xy.AxisRendererX.new(root, {
            minGridDistance: 10
          }),
          tooltip: am5.Tooltip.new(root, {})
        })
      );

      xAxis.data.setAll(data);

      const yAxis = chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
          min: 0,
          numberFormat: '#\'%\'',
          // strictMinMax: true,
          // max: 100,
          renderer: am5xy.AxisRendererY.new(root, {})
        })
      );

      yAxis.get('renderer').grid.template.setAll({
        stroke: am5.color('rgba(0,0,0,1)'),
        strokeWidth: 0.3,
        shadowOpacity: 0
      });

      yAxis.children.moveValue(am5.Label.new(root, {
        text: 'Occupancy',
        rotation: -90,
        y: am5.p50,
        centerX: am5.p50
      }), 0);

      const yAxis2 = chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
          maxDeviation: 0.3,
          min: 0,
          maxPrecision: 0,
          syncWithAxis: yAxis,
          renderer: am5xy.AxisRendererY.new(root, {
            opposite: true
          })
        })
      );

      function makeTooltip(series) {
        const tooltip = series.set('tooltip', am5.Tooltip.new(root, {
          getFillFromSprite: false,
          getStrokeFromSprite: false,
          autoTextColor: false,
          getLabelFillFromSprite: false,
          pointerOrientation: 'up',
          tooltipY: am5.p100
        }));

        tooltip.get('background').setAll({
          fill: am5.color(COLOR.black),
          strokeWidth: 1
        });

        series.columns.template.setAll({
          tooltipText: '{name}',
          tooltipY: am5.percent(100),
          // width: am5.percent(50),
          // maxWidth: 50
        });

        tooltip.label.adapters.add('text', (text, target) => {
          // cheat here
          if (target?.dataItem)
          {
            const stackValue = target?.dataItem?.component?._settings['valueYField']?.split('Percent')[0] + 'Value';
            if (stackValue?.includes('ibe') || stackValue?.includes('pms') || stackValue?.includes('voice'))
            {
              const adr = target?.dataItem?.component?._settings['valueYField']?.split('Percent')[0] + 'AverageDailyRate';
              const textTooltip = '[/][fontSize:14px fontFamily:Roboto fontWeight:bold]' + `${stackValue?.includes('ibe') ? 'Sales Engine:' : stackValue?.includes('pms') ? 'PMS:' : 'Voice:'}` + '[/] \n' +
                '●[/] [fontSize:12px fontFamily:Roboto]' + 'Total rooms: ' + target?.dataItem?.dataContext[stackValue] + '[/]\n' +
                '●[/] [fontSize:12px fontFamily:Roboto]' + `ADR: ${crr} ` + target?.dataItem?.dataContext[adr] + '[/]';
              return `${textTooltip}`;
            }
            else
            {
              return `${text}: ${target?.dataItem?.dataContext[stackValue]}`;
            }
          }
          return text;
        });
      }

      const series1 = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: 'ISE',
          xAxis,
          yAxis,
          valueYField: 'ibePercent',
          categoryXField: 'dayOfWeek',
          stacked: true,
          fill: am5.color('#F9B619')
        })
      );

      series1.data.setAll(data);
      makeTooltip(series1);

      const series2 = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: 'Voice',
          xAxis,
          yAxis,
          valueYField: 'voicePercent',
          categoryXField: 'dayOfWeek',
          stacked: true,
          fill: am5.color('#333333')
        })
      );

      series2.data.setAll(data);
      makeTooltip(series2);

      const series3 = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: 'PMS',
          xAxis,
          yAxis,
          valueYField: 'pmsPercent',
          categoryXField: 'dayOfWeek',
          stacked: true,
          fill: am5.color('#9A9A9A')
        })
      );

      series3.data.setAll(data);
      makeTooltip(series3);

      const series4 = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: 'Rooms Available to Sell',
          xAxis,
          yAxis,
          valueYField: 'availablePercent',
          categoryXField: 'dayOfWeek',
          stacked: true,
          fill: am5.color('#E6E8EC'),
          tooltip: am5.Tooltip.new(root, {
            labelText: '{name}: {valueY} {info}',
            tooltipY: am5.percent(10),
            pointerOrientation: 'up',
            background: am5.Graphics.new(root, {
              fill: am5.color(COLOR.black),
              strokeWidth: 1
            })
          }),
        })
      );

      series4.data.setAll(data);
      // makeTooltip(series4);
      const tooltip4 = series4.set('tooltip', am5.Tooltip.new(root, {
        getFillFromSprite: false,
        getStrokeFromSprite: false,
        autoTextColor: false,
        getLabelFillFromSprite: false,
        pointerOrientation: 'up',
        tooltipY: am5.p100
      }));

      tooltip4.get('background').setAll({
        fill: am5.color(COLOR.black),
        strokeWidth: 1
      });

      series4.columns.template.setAll({
        tooltipText: '{name}',
        tooltipY: am5.percent(10),
        // width: am5.percent(50),
        // maxWidth: 50
      });

      tooltip4.label.adapters.add('text', (text, target) => {
        // cheat here
        if (target?.dataItem)
        {
          const textTooltip = '●[/] [fontSize:12px fontFamily:Roboto width:150px]' + 'Room Available to Sell: ' + target?.dataItem?.dataContext['availableValue'] + '[/]' +
            '●[/] [fontSize:12px fontFamily:Roboto]' + '# of Adults: ' + target?.dataItem?.dataContext['totalAdults'] + '[/]\n' +
            '●[/] [fontSize:12px fontFamily:Roboto  width:150px]' + 'Total room sold: ' + target?.dataItem?.dataContext['totalRoomSold'] + '[/]' +
            '●[/] [fontSize:12px fontFamily:Roboto]' + '# of Kids: ' + target?.dataItem?.dataContext['totalKids'] + '[/]';
          return `${textTooltip}`;
        }
        return text;
      });

      const lineSeries = chart.series.push(
        am5xy.LineSeries.new(root, {
          name: 'Yesterday pickup',
          xAxis,
          yAxis: yAxis2,
          valueYField: 'totalYesterdayPickup',
          categoryXField: 'dayOfWeek',
          stroke: am5.color('#2893F2'),
          fill: am5.color('#2893F2'),
          tooltip: am5.Tooltip.new(root, {
            pointerOrientation: 'up',
            labelText: '{name} {categoryX}: {valueY} {info}',
            tooltipY: am5.p100,
            tooltipX: am5.p100,
            tooltipPosition: 'fixed'
          })
        })
      );

      lineSeries.strokes.template.setAll({
        strokeWidth: 3,
        templateField: 'strokeSettings'
      });


      lineSeries.data.setAll(data);

      lineSeries.bullets.push(() => {
        return am5.Bullet.new(root, {
          sprite: am5.Circle.new(root, {
            strokeWidth: 3,
            stroke: lineSeries.get('stroke'),
            radius: 5,
            fill: root.interfaceColors.get('background')
          })
        });
      });

      const cursor = chart.set('cursor', am5xy.XYCursor.new(root, {}));
      cursor.lineY.set('visible', false);

      const legend = chart.children.push(
        am5.Legend.new(root, {
          centerX: am5.p50,
          x: am5.p50
        })
      );
      legend.data.setAll(chart.series.values);

      chart.appear(1000, 100).then();
      series1.appear();
      series2.appear();
      series3.appear();
      series4.appear();
    });
  }
}
