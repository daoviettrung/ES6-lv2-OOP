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
      listProduct.push(new product(i, "Trung" + i, "cate" + i, d, i + 8, 0));
    }
    return listProduct;
  }

  findProductById(idProduct) {
    var value;
    if (idProduct > this.listProduct.length) {
      value = "Number not available";
      return value;
    }
    var listProducts = this.listProduct();
    var size = idProduct - 1;
    for (var i = 0; i <= size; i++) {
      if (listProducts[i].getId() == idProduct) {
        value = listProducts[i].getName();
        break;
      }
    }
    return value;
  }

  findProductByIdWay2(idProduct) {
    var nameProduct = this.listProduct().find((x) => x.getId() == idProduct);
    return nameProduct;
  }

  checkQuanlity() {
    var listQuanlity = [];
    var listProducts = this.listProduct();
    var size = this.listProduct().length;
    for (var i = 0; i < size; i++) {
      if (
        listProducts[i].getQuanlity() > 0 &&
        listProducts.getIsDelete == false
      ) {
        listQuanlity.push(listProducts[i]);
      }
    }
    return listQuanlity;
  }

  checkQuanlityWay2() {
    var listQuanlity = [];
    listQuanlity.push(this.listProduct().filter((x) => x.getQuanlity() > 0));
    return listQuanlity;
  }

  checkSaleDate() {
    var dateTime = new Date();
    var listSaleDate = [];
    var listProducts = this.listProduct();
    var size = this.listProduct().length;
    for (var i = 0; i < size; i++) {
      if (
        Date.parse(listProducts[i].getSaleDate()) > Date.parse(dateTime) &&
        listProducts.getIsDelete == false
      ) {
        listSaleDate.push(listProducts[i]);
      }
    }
    return listSaleDate;
  }

  checkSaleDateWay2() {
    var dateTime = new Date();
    var listSaleDate = [];
    listSaleDate.push(
      Date.parse(
        this.listProduct().filter((x) => x.getSaleDate()) > Date.parse(dateTime)
      )
    );
    return listSaleDate;
  }

  totalProduct() {
    var total = 0;
    var size = this.listProduct().length;
    var listProducts = this.listProduct();
    for (var i = 0; i < size; i++) {
      if (listProducts[i].getIsDelete == false) {
        total = total + listProducts[i].getQuanlity();
      }
    }
    return total;
  }

  totalProductWay2() {
    var listProducts = this.listProduct();
    const total = listProducts.reduce((accumulator, item) => {
      return (accumulator += item.getQuanlity());
    }, 0);
    return total;
  }

  isHaveProductInCategory(categoryId) {
    var size = this.listProduct().length;
    var listProducts = this.listProduct();
    for (var i = 0; i < size; i++) {
      if (listProducts[i].getCategoryId() == categoryId) {
        return true;
        break;
      }
    }
  }

  isHaveProductInCategoryWay2(categoryId) {
    var check = this.listProduct().find((x) => x.getCategoryId() == categoryId);
    return check != null ? true : false;
  }

  filterProductBySaleDate() {
    var dateTime = new Date();
    var list = [];
    var listProducts = this.listProduct();
    var size = this.listProduct().length;
    for (var i = 0; i < size; i++) {
      if (
        Date.parse(listProducts[i].getSaleDate()) > Date.parse(dateTime) &&
        listProducts[i].getQuanlity() > 0
      ) {
        var temp = [];
        temp.push(listProducts[i].getId());
        temp.push(listProducts[i].getName());
        list.push(temp);
      }
    }
    return list;
  }

  filterProductBySaleDateWay2() {
    var dateTime = new Date();
    var list = [];
    var listProducts = this.listProduct();
    listProducts.forEach(function (value) {
      if (
        Date.parse(value.getSaleDate()) > Date.parse(dateTime) &&
        value.getQuanlity() > 0
      ) {
        var temp = [];
        temp.push(value.getId());
        temp.push(value.getName());
        list.push(temp);
      }
    });
    return list;
  }
}
