const ua = {
    "order": "Замовити",
    "populars": "Найпопулярніші"
  }
  
  const en = {
    "order": "Order",
    "populars": "Popular"
  }
  
 export const resolveLocale = () => {
    if (navigator.language === 'uk') {
      return ua;
    }
    return en;
  }