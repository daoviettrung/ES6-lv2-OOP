class product {

  constructor(id, name, categoryId, saleDate, quanlity, isDelete) {
    this.id = id;
    this.name = name;
    this.categoryId = categoryId;
    this.saleDate = saleDate;
    this.quanlity = quanlity;
    this.isDelete = isDelete;
  }

  setId(id) {
    this.id;
  }

  setName(name) {
    this.name;
  }

  setCategoryId(categoryId) {
    this.categoryId;
  }

  setSaleDate(saleDate) {
    this.saleDate;
  }

  setQuanlity(quanlity) {
    this.quanlity;
  }

  setIsDelete(isDelete) {
    this.isDelete;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getCategoryId() {
    return this.categoryId;
  }

  getSaleDate() {
    return this.saleDate;
  }

  getQuanlity() {
    return this.quanlity;
  }

  getIsDelete() {
    return this.isDelete;
  }

  listProduct() {
    var d = new Date();
    var listProduct = [];
    for (var i = 0; i < 10; i++) {
      listProduct.push(new product(i, "Trung" + i, "cate" + i, d, i + 8, true));
    }
    return listProduct;
  }

  findProductById(idProduct, listProducts) {
    var nameProduct;
    var size = listProducts.length;
    for (var i = 0; i <= size; i++) {
      if (listProducts[i].getId() == idProduct) {
        nameProduct = listProducts[i].getName();
        break;
      }
    }
    return nameProduct;
  }

  findProductByIdWay2(idProduct) {
    return this.listProduct().find((product) => product.getId() == idProduct);
  }

  checkQuanlity(listProducts) {
    var listQuanlity = [];
    var size = listProducts.length;
    for (var i = 0; i < size; i++) {
      if (
        listProducts[i].getQuanlity() > 0 &&
        listProducts.getIsDelete != false
      ) {
        listQuanlity.push(listProducts[i]);
      }
    }
    return listQuanlity;
  }

  checkQuanlityWay2(listProducts) {
    return (listProducts.filter((quanlity) => quanlity.getQuanlity() > 0));
  }

  checkSaleDate(listProducts) {
    var dateTime = new Date();
    var listSaleDate = [];
    var size = listProducts.length;
    for (var i = 0; i < size; i++) {
      if (
        Date.parse(listProducts[i].getSaleDate()) > Date.parse(dateTime) &&
        listProducts.getIsDelete != false
      ) {
        listSaleDate.push(listProducts[i]);
      }
    }
    return listSaleDate;
  }

  checkSaleDateWay2(listProducts) {
    var dateTime = new Date();
    return (
      Date.parse(
        listProducts.filter((saleDate) => saleDate.getSaleDate()) == Date.parse(dateTime)
      )
    );
  }

  totalProduct(listProducts) {
    var total = 0;
    var size = listProducts.length;
    for (var i = 0; i < size; i++) {
      if (listProducts[i].getIsDelete != false) {
        total = total + listProducts[i].getQuanlity();
      }
    }
    return total;
  }

  totalProductWay2(listProducts) {
    const total = listProducts.reduce((accumulator, item) => {
      return (accumulator += item.getQuanlity());
    }, 0);
    return total;
  }

  isHaveProductInCategory(categoryId, listProducts) {
    var size = listProducts.length;
    for (var i = 0; i < size; i++) {
      if (listProducts[i].getCategoryId() == categoryId) {
        return true;
      }
    }
  }

  isHaveProductInCategoryWay2(categoryId, listProducts) {
    var check = listProducts.find((cate) => cate.getCategoryId() == categoryId);
    if(check != null){
      return true;
    }
  }

  filterProductBySaleDate(listProducts) {
    var dateTime = new Date();
    var listProductBySaleDate = [];
    var size = listProducts.length;
    for (var i = 0; i < size; i++) {
      if (
        Date.parse(listProducts[i].getSaleDate()) > Date.parse(dateTime) &&
        listProducts[i].getQuanlity() > 0
      ) {
        var temp = [];
        temp.push(listProducts[i].getId());
        temp.push(listProducts[i].getName());
        listProductBySaleDate.push(temp);
      }
    }
    return listProductBySaleDate;
  }

  filterProductBySaleDateWay2(listProducts) {
    var dateTime = new Date();
    var listProductBySaleDate = [];
    listProducts.forEach(function (value) {
      if (
        Date.parse(value.getSaleDate()) > Date.parse(dateTime) &&
        value.getQuanlity() > 0
      ) {
        var temp = [];
        temp.push(value.getId());
        temp.push(value.getName());
        listProductBySaleDate.push(temp);
      }
    });
    return listProductBySaleDate;
  }
}

