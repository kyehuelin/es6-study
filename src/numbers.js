export const CURRENCY = "CURRENCY"
export const INTEGER = "INTEGER"
export const PERCENT = "PERCENT"
export const FLOAT = "FLOAT"

const yoyStep = 5

export const periods = {
  month: {
    period: "month",
    endOf: "month",
    step: 1,
    division: 12
  },
  quarter: {
    period: "quarter",
    endOf: "quarter",
    step: 1,
    division: 4
  },
  year: {
    period: "year",
    endOf: "year",
    step: 1,
    division: 1
  },
  yoy: {
    period: "month",
    endOf: "year",
    step: yoyStep,
    division: 12 / yoyStep
  }
}

// export const SMALLEST_RANGE = [-2, 2]
// export const SMALL_RANGE = [-5, 5]
// export const MEDIUM_RANGE = [-10, 10]
// export const LARGE_RANGE = [-15, 15]
// export const LARGEST_RANGE = [-20, 20]

export const levelDivideBy = {
  country: 1,
  division: 2,
  region: 20,
  store: 410
}

export const levels = ["region", "store"]

export const months = 12

export const channel = {
  revenue: {
    online: {
      type: CURRENCY,
      divideByLevel: true,
      divideByPeriod: true,
      range: [15000000, 40000000]
    },
    telesales: {
      type: CURRENCY,
      divideByLevel: true,
      divideByPeriod: true,
      range: [15000000, 40000000]
    },
    retail: {
      type: CURRENCY,
      divideByLevel: true,
      divideByPeriod: true,
      range: [15000000, 40000000]
    },
    indirect: {
      type: CURRENCY,
      divideByLevel: true,
      divideByPeriod: true,
      range: [15000000, 40000000]
    }
  },
  volume: {
    online: {
      type: INTEGER,
      divideByLevel: true,
      divideByPeriod: true,
      range: [150000, 400000]
    },
    telesales: {
      type: INTEGER,
      divideByLevel: true,
      divideByPeriod: true,
      range: [150000, 400000]
    },
    retail: {
      type: INTEGER,
      divideByLevel: true,
      divideByPeriod: true,
      range: [150000, 400000]
    },
    indirect: {
      type: INTEGER,
      divideByLevel: true,
      divideByPeriod: true,
      range: [150000, 400000]
    }
  }
}

export const productMix = {
  fixed: {
    type: INTEGER,
    divideByLevel: false,
    divideByPeriod: false,
    range: [0.1, 0.4]
  },
  postpayAcq: {
    type: INTEGER,
    divideByLevel: false,
    divideByPeriod: false,
    range: [0.1, 0.3]
  },
  postpayRenewal: {
    type: INTEGER,
    divideByLevel: false,
    divideByPeriod: false,
    range: [0.1, 0.2]
  },
  prepay: {
    type: INTEGER,
    divideByLevel: false,
    divideByPeriod: false,
    range: [0.1, 0.15]
  }
}

export const nationalMonthlyNumbers = {
  population: {
    value: 66405750,
    type: INTEGER,
    divideByLevel: true,
    divideByPeriod: false,
    range: [50000000, 80000000]
  },
  revenue: {
    value: 1277432132,
    type: CURRENCY,
    divideByLevel: true,
    divideByPeriod: true,
    range: [900000000, 1500000000]
  },
  volume: {
    value: 2753513,
    type: INTEGER,
    divideByLevel: true,
    divideByPeriod: true,
    range: [250000, 300000]
  },
  customers: {
    value: 19513290,
    type: INTEGER,
    divideByLevel: true,
    divideByPeriod: false,
    range: [50000000, 80000000]
  },
  channelCosts: {
    value: 212635087,
    type: CURRENCY,
    divideByLevel: true,
    divideByPeriod: true,
    range: [180000000, 250000000]
  },
  margin: {
    value: 1065262,
    type: CURRENCY,
    divideByLevel: true,
    divideByPeriod: true,
    range: [8000000, 12000000]
  },
  revenueVsPotential: {
    value: 0.12,
    type: PERCENT,
    divideByLevel: false,
    divideByPeriod: false,
    range: [-0.2, 0.2]
  },
  ownStores: {
    value: 410,
    type: INTEGER,
    divideByLevel: true,
    divideByPeriod: false,
    range: [360, 460]
  },
  indirectStores: {
    value: 219,
    type: INTEGER,
    divideByLevel: true,
    divideByPeriod: false,
    range: [160, 300]
  },
  EEStores: {
    value: 670,
    type: INTEGER,
    divideByLevel: true,
    divideByPeriod: false,
    range: [500, 900]
  },
  o2Stores: {
    value: 540,
    type: INTEGER,
    divideByLevel: true,
    divideByPeriod: false,
    range: [300, 800]
  },
  salesVsPotential: {
    value: -0.12,
    type: PERCENT,
    divideByLevel: false,
    divideByPeriod: false,
    range: [-0.2, 0.2]
  },
  VFcustomerShare: {
    value: 0.22,
    type: PERCENT,
    divideByLevel: false,
    divideByPeriod: false,
    range: [0.01, 0.5]
  },
  digitalPropensity: {
    value: -0.05,
    type: PERCENT,
    divideByLevel: false,
    divideByPeriod: false,
    range: [-0.2, 0.3]
  },
  acqMarketShare: {
    value: 0.38,
    type: PERCENT,
    divideByLevel: false,
    divideByPeriod: false,
    range: [-0.1, 0.5]
  },
  networkSpeed: {
    value: 0.38,
    type: FLOAT,
    divideByLevel: false,
    divideByPeriod: false,
    range: [0.1, 5]
  },
  networkLatency: {
    value: 62.39612,
    type: FLOAT,
    divideByLevel: false,
    divideByPeriod: false,
    range: [40, 100]
  }
}
