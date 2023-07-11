export const addColors = (mainArr, compareArr) => {
    if(mainArr.length <= 0 && compareArr.length <= 0 ) throw new Error("Error: params not found");
    
    for (let i = 0; i < compareArr.length; i++) {
      for (let ii = 0; ii < mainArr.length; ii++) {
        if (compareArr[i] === mainArr[ii].id) {
          mainArr[ii].checked = true;
        }
      }
    }

  };