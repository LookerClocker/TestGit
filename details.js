jQuery(document).ready(function () {
    var vendorName = location.search.split('id=')[1];
    console.log(vendorName);
    jQuery.ajax({
        type: 'GET',
        headers: {'X-Parse-Application-Id': 'promoSite', 'X-Parse-REST-API-Key': 'J59-8zpY7r3~Vf/t'},
        url: "http://server.mon-coupon.com/parse/classes/Retailer",
        data: 'where={"objectId":"' + vendorName + '"}',
        contentType: 'text/javascript',
        error: function (e) {
            alert('Error ' + e.responseText);
            console.log(e);
        }
    }).done(function (resultObject, status) {
        console.log('result object',resultObject);
        var coupon = resultObject.results;
        if (coupon && coupon.length > 0) {
            var ul = jQuery("<ul id='col-one'></ul>");
            for (var i = 0; i < coupon.length; i++) {
                var li = null;
                if (coupon[i].objectId && coupon[i].objectId.length > 0) {

                    var mainDiv = document.createElement('div');
                    document.getElementById('details').appendChild(mainDiv);
                    var imageWrapper = document.createElement('div');
                    var image = document.createElement('img');
                    image.src = 'https://pp.vk.me/c9434/v9434837/30ca/1eXyrZWfcBc.jpg';
                    imageWrapper.appendChild(image);

                    var retailerName = document.createElement('div');
                    var detail = document.createElement('div');
                    var code = document.createElement('div');
                    var expirationDate = document.createElement('div');
                    retailerName.innerHTML='Scrubs$Beyongs';
                    detail.innerHTML='Some important details for this coupon. Get it!';
                    code.innerHTML='34982GRd3R';
                    expirationDate.innerHTML='Valid until 21/05/16';

                    document.getElementsByTagName('body')[0].style.backgroundColor ='rgba(10, 10, 10, 0.07)';

                    mainDiv.style.width = '40%';
                    mainDiv.style.marginTop = '5%';
                    mainDiv.style.marginRight = 'auto';
                    mainDiv.style.marginBottom = '0';
                    mainDiv.style.marginLeft = 'auto';
                    mainDiv.style.boxShadow = 'inset 0 0 10px #E4E7EA';
                    mainDiv.style.padding = '3%';
                    mainDiv.style.backgroundColor = '#fff';

                    imageWrapper.style.width='50%';
                    imageWrapper.style.marginTop = '0';
                    imageWrapper.style.marginRight = 'auto';
                    imageWrapper.style.marginBottom = '3%';
                    imageWrapper.style.marginLeft = 'auto';
                    imageWrapper.style.border = '.0625rem solid #E4E7EA';
                    imageWrapper.style.padding = '4%';

                    image.style.width='100%';
                    image.style.width='100%';

                    retailerName.style.textAlign='center';
                    retailerName.style.marginBottom='3%';

                    detail.style.textAlign='center';
                    detail.style.fontSize='1.25rem';
                    detail.style.lineHeight='1.625rem';
                    detail.style.color='#202020';
                    detail.style.display='block';
                    detail.style.padding='.625rem 0';

                    code.style.textAlign='center';
                    code.style.border='.0625rem dashed #fca12a';
                    code.style.padding='3%';
                    code.style.backgroundColor='#fef5e9';

                    expirationDate.style.textAlign='center';
                    expirationDate.style.marginTop='5%';

                    mainDiv.appendChild(imageWrapper);
                    mainDiv.appendChild(retailerName);
                    mainDiv.appendChild(detail);
                    mainDiv.appendChild(code);
                    mainDiv.appendChild(expirationDate);
                }
                ul.append(li);
            }
        }
    });

    // var mainDiv = document.createElement('div');
    // document.getElementById('details').appendChild(mainDiv);
    // var imageWrapper = document.createElement('div');
    // var image = document.createElement('img');
    // image.src = 'https://pp.vk.me/c9434/v9434837/30ca/1eXyrZWfcBc.jpg';
    // imageWrapper.appendChild(image);
    //
    // var retailerName = document.createElement('div');
    // var detail = document.createElement('div');
    // var code = document.createElement('div');
    // var expirationDate = document.createElement('div');
    // retailerName.innerHTML='Scrubs$Beyongs';
    // detail.innerHTML='Some important details for this coupon. Get it!';
    // code.innerHTML='34982GRd3R';
    // expirationDate.innerHTML='Valid until 21/05/16';
    //
    // document.getElementsByTagName('body')[0].style.backgroundColor ='rgba(10, 10, 10, 0.07)';
    //
    // mainDiv.style.width = '40%';
    // mainDiv.style.marginTop = '5%';
    // mainDiv.style.marginRight = 'auto';
    // mainDiv.style.marginBottom = '0';
    // mainDiv.style.marginLeft = 'auto';
    // mainDiv.style.boxShadow = 'inset 0 0 10px #E4E7EA';
    // mainDiv.style.padding = '3%';
    // mainDiv.style.backgroundColor = '#fff';
    //
    // imageWrapper.style.width='50%';
    // imageWrapper.style.marginTop = '0';
    // imageWrapper.style.marginRight = 'auto';
    // imageWrapper.style.marginBottom = '3%';
    // imageWrapper.style.marginLeft = 'auto';
    // imageWrapper.style.border = '.0625rem solid #E4E7EA';
    // imageWrapper.style.padding = '4%';
    //
    // image.style.width='100%';
    // image.style.width='100%';
    //
    // retailerName.style.textAlign='center';
    // retailerName.style.marginBottom='3%';
    //
    // detail.style.textAlign='center';
    // detail.style.fontSize='1.25rem';
    // detail.style.lineHeight='1.625rem';
    // detail.style.color='#202020';
    // detail.style.display='block';
    // detail.style.padding='.625rem 0';
    //
    // code.style.textAlign='center';
    // code.style.border='.0625rem dashed #fca12a';
    // code.style.padding='3%';
    // code.style.backgroundColor='#fef5e9';
    //
    // expirationDate.style.textAlign='center';
    // expirationDate.style.marginTop='5%';
    //
    // mainDiv.appendChild(imageWrapper);
    // mainDiv.appendChild(retailerName);
    // mainDiv.appendChild(detail);
    // mainDiv.appendChild(code);
    // mainDiv.appendChild(expirationDate);
});