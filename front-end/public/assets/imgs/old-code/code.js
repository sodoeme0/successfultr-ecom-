// 1st version of filterproduct function
async function filterProducts(categoryFilters, brandFilters, randomFilters) {

    //wait for async process  
    const response = await fetch("products.json");
    //wait for async process
    data = await response.json();
  
    // intialize array for products that match filters
    let alreadyAdded = [];
  
    // if all filters are empty than load all products
    if (
      categoryFilters.length === 0 &&
      brandFilters.length === 0 &&
      randomFilters.length === 0
    ) {
      loadProducts(data);
      return;
    }
  
    // iterate through all items in json array
    for (let i = 0; i < data.length; i++) {
  
      //create objeect for current index
      let product = data[i];
  
      //iterate through the tags array for current object
      for (let x = 0; x < product.tags.length; x++) {
       
      
  //case that handles when only categooryFilters are present
        if (
          brandFilters.length === 0 &&
          randomFilters.length === 0 &&
          categoryFilters.includes(product.tags[x].toLowerCase())
        ) {
  
          alreadyAdded.push(product);
          break;
        }
  
        //case that handles when only brandFilters are present
  
        if (
          categoryFilters.length === 0 &&
          randomFilters.length === 0 &&
          brandFilters.includes(product.tags[x].toLowerCase())
        ) {
          console.log("here");
  
          alreadyAdded.push(product);
          break;
        }
  
        //case that handles when only randomFilters are present
  
        if (
          categoryFilters.length === 0 &&
          brandFilters.length === 0 &&
          randomFilters.includes(product.tags[x].toLowerCase())
        ) {
          alreadyAdded.push(product);
          break;
        }
  
        //case that handles when only randomFIlters are not present
  
        if (
          randomFilters.length === 0 &&
          brandFilters.includes(product.brand) &&
          categoryFilters.includes(product.tags[x].toLowerCase())
        ) {
          console.log("here");
  
          alreadyAdded.push(product);
          break;
        }
        //case that handles when only brandFilters are not present
  
        if (
          brandFilters.length === 0 &&
          randomFilters.includes(product.tags[x].toLowerCase()) &&
          categoryFilters.includes(product.category)
        ) {
          console.log("here");
          alreadyAdded.push(product);
          break;
        }
  
              //case that handles when only categoryFilters are not present
  
        if (
          categoryFilters.length === 0 &&
          randomFilters.includes(product.tags[x].toLowerCase()) &&
          brandFilters.includes(product.brand)
        ) {
          console.log("here");
          alreadyAdded.push(product);
          break;
        }
  
        //case that handles when all filters are  present
  
        if (
          categoryFilters.includes(product.category) &&
          randomFilters.includes(product.tags[x].toLowerCase()) &&
          brandFilters.includes(product.brand)
        ) {
          console.log("here");
          alreadyAdded.push(product);
          break;
        }
      }
    }
  
  
    //after loop ends load added products
    alreadyAdded.length===0 ? loadProducts(data) : loadProducts(alreadyAdded);
  }












  //V2
  //Asynchronous function
//Parameters: Array for: category, brand, and random
async function filterProducts(categoryFilters, brandFilters, randomFilters) {
    //wait for async process
    const response = await fetch("products.json");
    //wait for async process
    data = await response.json();
  
    // intialize array for products that match filters
    let alreadyAdded = [];
    // iterate through all items in json array
    for (let i = 0; i < data.length; i++) {
      //create objeect for current index
      product = data[i];
      if (
        (brandFilters.length === 0 || brandFilters.includes(product.brand)) &&
        (randomFilters.length === 0 ||
          randomFilters.some((tag) => product.tags.includes(tag.toLowerCase))) &&
        (categoryFilters.length === 0 ||
          categoryFilters.includes(product.category))
      ) {
        alreadyAdded.push(product);
      }
    }
  
    //after loop ends load added products, iff array empty load all products
    alreadyAdded.length === 0 ? loadProducts(data) : loadProducts(alreadyAdded);
  }
  

  product = {
    "brand": "apple",
    "category": "phone",
    "name": "iPhone 13",
    "price": 999.99,
    "description": "The latest and greatest iPhone with advanced features and performance.",
    "tags": ["smartphone", "ios", "camera", "apple", "phone"],
    "img": "assets/imgs/products/iphone13.jpeg"
  }

  filter = ['ios']

  console.log(filter.some((tag)=> product.tags.includes(tag.toLowerCase())))


  function updatFilters(checkbox, filterArray ){
     if (checkbox.checked) {
                filterArray.push(element.id);
                filterProducts(
                  categoryFilters,
                  brandFilters,
                  randomFilters
                );
              } else {
                filterArray.splice(
                  filterArray.indexOf(element.id), 1
                );
                filterProducts(
                  categoryFilters,
                  brandFilters,
                  randomFilters
                );
              }

  }

