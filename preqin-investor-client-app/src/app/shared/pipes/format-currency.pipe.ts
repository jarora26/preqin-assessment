import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatCurrency',
  standalone: true // Mark the pipe as standalone
})
export class FormatCurrencyPipe implements PipeTransform {

  transform(value: number, currencySymbol: string = '$'): string {
    if (value === null || value === undefined) return '';

    if (value >= 1e12) return `${currencySymbol}${(value / 1e12).toFixed(1)}T`;
    if (value >= 1e9) return `${currencySymbol}${(value / 1e9).toFixed(1)}B`;
    if (value >= 1e6) return `${currencySymbol}${(value / 1e6).toFixed(1)}M`;
    if (value >= 1e3) return `${currencySymbol}${(value / 1e3).toFixed(1)}K`;
    return `${currencySymbol}${value.toFixed(0)}`;
  }
}
