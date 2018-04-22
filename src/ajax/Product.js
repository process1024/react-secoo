import $ from 'jquery'

export function getProductData(t,id) {
    let url = `http://m.secoo.com/getAjaxData.action?client=iphone&productId=${id}&urlfilter=goods&v=1.0&client=iphone&method=queryGoodsInfo&fields=subhead,productId,productCode,productName,marketPrice,secooPrice,level,brandId,brandEnName,brandCnName,categoryId,categoryName,categoryOrgCode,showPicture,content,proStyle,proModel,fittings,cod,source,areaType,additional,sizeTableUrl,parameter,sizeTableTxt,brandInfo,washingTips,maintenanceTips&_=${t}&callback=?`
    const result = $.getJSON(url)
    return result
}

