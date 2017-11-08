import { ModuleWithProviders, NgModule } from "@angular/core";

// Modules
import { NgAisBreadcrumbModule } from "./breadcrumb/breadcrumb.module";
import { NgAisClearAllModule } from "./clear-all/clear-all.module";
import { NgAisCurrentRefinedValuesModule } from "./current-refined-values/current-refined-values.module";
import { NgAisHierarchicalMenuModule } from "./hierarchical-menu/hierarchical-menu.module";
import { NgAisHitsPerPageSelectorModule } from "./hits-per-page-selector/hits-per-page-selector.module";
import { NgAisHitsModule } from "./hits/hits.module";
import { NgAisInfiniteHitsModule } from "./infinite-hits/infinite-hits.module";
import { NgAisInstantSearchModule } from "./instantsearch/instantsearch.module";
import { NgAisMenuModule } from "./menu/menu.module";
import { NgAisNumericRefinementListModule } from "./numeric-refinement-list/numeric-refinement-list.module";
import { NgAisNumericSelectorModule } from "./numeric-selector/numeric-selector.module";
import { NgAisPaginationModule } from "./pagination/pagination.module";
import { NgAisPriceRangesModule } from "./price-ranges/price-ranges.module";
import { NgAisRangeSliderModule } from "./range-slider/range-slider.module";
import { NgAisRefinementListModule } from "./refinement-list/refinement-list.module";
import { NgAisSearchBoxModule } from "./search-box/search-box.module";
import { NgAisSortBySelectorModule } from "./sort-by-selector/sort-by-selector.module";
import { NgAisStarRatingModule } from "./star-rating/star-rating.module";
import { NgAisStatsModule } from "./stats/stats.module";
import { NgAisToggleModule } from "./toggle/toggle.module";

const NGIS_MODULES = [
  NgAisInstantSearchModule,
  NgAisHitsModule,
  NgAisSearchBoxModule,
  NgAisClearAllModule,
  NgAisMenuModule,
  NgAisPaginationModule,
  NgAisRefinementListModule,
  NgAisHitsPerPageSelectorModule,
  NgAisSortBySelectorModule,
  NgAisNumericSelectorModule,
  NgAisNumericRefinementListModule,
  NgAisStatsModule,
  NgAisToggleModule,
  NgAisInfiniteHitsModule,
  NgAisCurrentRefinedValuesModule,
  NgAisPriceRangesModule,
  NgAisHierarchicalMenuModule,
  NgAisStarRatingModule,
  NgAisRangeSliderModule,
  NgAisBreadcrumbModule
];

@NgModule({
  exports: NGIS_MODULES,
  imports: [NgAisInstantSearchModule.forRoot()]
})
export class NgAisRootModule {}

@NgModule({ imports: NGIS_MODULES, exports: NGIS_MODULES })
export class NgAisModule {
  public static forRoot(): ModuleWithProviders {
    return { ngModule: NgAisRootModule };
  }
}
