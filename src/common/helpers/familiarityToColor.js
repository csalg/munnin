export default (familiarity) => {
    if (familiarity < 0.5) {
      let green = 37 + familiarity*2*193
      return `rgb(${[230,green,40]})`
    } else {
      let red = 230 - (familiarity - 0.5)*2*150
      return `rgb(${[red,230,40]})`
    }
  }
  