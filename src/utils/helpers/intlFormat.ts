const intlFormat = {
  narrowTime: () =>
    new Intl.RelativeTimeFormat('en', {
      style: 'narrow',
    }),
  currencyNumber: () =>
    new Intl.NumberFormat('en', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 2,
    }),
  percentUnit: () =>
    new Intl.NumberFormat('en', {
      style: 'percent',
      signDisplay: 'exceptZero',
    }),
  celsiusUnit: () =>
    new Intl.NumberFormat('en', {
      style: 'unit',
      unit: 'celsius',
      notation: 'compact',
      maximumFractionDigits: 0,
    }),
  shortCompact: () =>
    new Intl.NumberFormat('en', {
      notation: 'compact',
      compactDisplay: 'short',
    }),
  speedUnit: () =>
    new Intl.NumberFormat('en', {
      style: 'unit',
      unit: 'kilometer-per-hour',
    }),
};

export { intlFormat };
