function vacation(groupSize, groupType, dayOfWeek) {
    let pricePerPerson = 0;
    let totalPrice = 0;
    
    if (groupType === 'Students') {
      if (dayOfWeek === 'Friday') {
        pricePerPerson = 8.45;
      } else if (dayOfWeek === 'Saturday') {
        pricePerPerson = 9.80;
      } else if (dayOfWeek === 'Sunday') {
        pricePerPerson = 10.46;
      }
      
      totalPrice = groupSize * pricePerPerson;
      
      if (groupSize >= 30) {
        totalPrice *= 0.85;
      }
    } else if (groupType === 'Business') {
      if (dayOfWeek === 'Friday') {
        pricePerPerson = 10.90;
      } else if (dayOfWeek === 'Saturday') {
        pricePerPerson = 15.60;
      } else if (dayOfWeek === 'Sunday') {
        pricePerPerson = 16;
      }
      
      totalPrice = groupSize * pricePerPerson;
      
      if (groupSize >= 100) {
        totalPrice -= (10 * pricePerPerson);
      }
    } else if (groupType === 'Regular') {
      if (dayOfWeek === 'Friday') {
        pricePerPerson = 15;
      } else if (dayOfWeek === 'Saturday') {
        pricePerPerson = 20;
      } else if (dayOfWeek === 'Sunday') {
        pricePerPerson = 22.50;
      }
      
      totalPrice = groupSize * pricePerPerson;
      
      if (groupSize >= 10 && groupSize <= 20) {
        totalPrice *= 0.95;
      }
    } else {
      console.log('Invalid group type');
      return;
    }
    
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
  }
  