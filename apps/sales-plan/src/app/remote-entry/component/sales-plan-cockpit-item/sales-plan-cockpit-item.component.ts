import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatExpansionPanel } from '@angular/material/expansion';
import { Router, ActivatedRoute } from '@angular/router';
import { RatePlan, DistributionChannel, RatePlanStatusEnum } from '@micro-fe-test/graphql';
import { CockpitSummaryItem, CockpitType } from '@micro-fe-test/store-sharing';
import { Subject } from 'rxjs';

interface RatePlanDetail extends RatePlan
{
  summary: CockpitSummaryItem[];
}

@Component({
  selector: 'micro-fe-test-sales-plan-cockpit-item',
  templateUrl: './sales-plan-cockpit-item.component.html',
  styleUrls: ['./sales-plan-cockpit-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SalesPlanCockpitItemComponent implements OnInit, OnDestroy {
  @ViewChild(MatExpansionPanel, {static: false}) panel: MatExpansionPanel;
  @Input() isPromoted: boolean;
  @Input() derivedSalePlan: RatePlan;
  @Input() rateType: string;
  @Input() ratePlan: RatePlanDetail;
  @Input() countColumn = 7;
  @Input() date: Date;
  @Output() refreshSalesPlanList = new EventEmitter();
  @Output() refreshOverview = new EventEmitter();

  cockpitType = CockpitType;
  distributionChanel = DistributionChannel;
  isToggleSalesPlanRestriction = false;
  currency: string;
  ratePlanStatusEnum = RatePlanStatusEnum;

  destroy$ = new Subject();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog,
  )
  { }

  ngOnInit(): void {
    const hotelCurrency = localStorage.getItem('hotelCurrency');
    const initValue = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: hotelCurrency,
    }).format(undefined);
    this.currency = initValue.replace('NaN', '');
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  trackByRowValue(index: number, item: any): number {
    return index;
  }
}
