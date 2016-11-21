jQuery(document).ready(function () {
    jQuery.ajax({
        type: 'GET',
        headers: {'X-Parse-Application-Id': 'promoSite', 'X-Parse-REST-API-Key': 'J59-8zpY7r3~Vf/t'},
        url: "http://server.mon-coupon.com/parse/classes/Coupon",
        data: 'include=retailer,category',
        contentType: 'text/javascript',
        error: function (e) {
            alert('Error ' + e.responseText);
            console.log(e);
        }
    }).done(function (resultObject, status) {
        var coupon = resultObject.results;
        console.log(resultObject);
        if (coupon && coupon.length > 0) {
            var ul = jQuery("<ul id='col-one'></ul>");
            for (var i = 0; i < coupon.length; i++) {
                var li = null;
                if (coupon[i].objectId && coupon[i].objectId.length > 0) {
                    var mainDiv = document.createElement('div');
                    document.getElementById('coupon').appendChild(mainDiv);
                    var couponHeader = document.createElement('div');
                    var couponTitle = document.createElement('span');
                    var usesSpan = document.createElement('span');
                    var rateSpan = document.createElement('span');
                    var typeSpan = document.createElement('span');
                    var expirationSpan = document.createElement('span');
                    couponHeader.appendChild(couponTitle);
                    couponHeader.appendChild(usesSpan);
                    couponHeader.appendChild(rateSpan);
                    couponHeader.appendChild(typeSpan);
                    couponHeader.appendChild(expirationSpan);
                    mainDiv.style.width='70%';
                    mainDiv.style.border='1px solid #cdcdcd';
                    mainDiv.style.padding='1%';
                    mainDiv.style.backgroundColor='#fff';
                    mainDiv.style.marginTop='2%';
                    mainDiv.style.marginBottom='2%';
                    mainDiv.style.marginLeft='auto';
                    mainDiv.style.marginRight='auto';
                    //styles Header
                    couponHeader.style.marginBottom='2%';
                    couponTitle.style.color='#666';
                    couponTitle.style.fontFamily="'Montserrat', sans-serif";
                    usesSpan.style.borderRadius='6px';
                    usesSpan.style.padding='3px';
                    usesSpan.style.color='#f7f7f7';
                    usesSpan.style.fontFamily="'Montserrat', sans-serif";
                    usesSpan.style.backgroundColor='#fca12a';
                    usesSpan.style.fontSize='12px';
                    usesSpan.style.marginLeft ='3px%';
                    usesSpan.style.marginRight ='3px';
                    rateSpan.style.borderRadius='6px';
                    rateSpan.style.padding='3px';
                    rateSpan.style.color='#f7f7f7';
                    rateSpan.style.fontFamily="'Montserrat', sans-serif";
                    rateSpan.style.backgroundColor='#fca12a';
                    rateSpan.style.fontSize='12px';
                    rateSpan.style.marginLeft ='3px';
                    rateSpan.style.marginRight ='3px';
                    typeSpan.style.borderRadius='6px';
                    typeSpan.style.padding='3px';
                    typeSpan.style.color='#f7f7f7';
                    typeSpan.style.fontFamily="'Montserrat', sans-serif";
                    typeSpan.style.backgroundColor='#fca12a';
                    typeSpan.style.fontSize='12px';
                    typeSpan.style.marginLeft ='3px';
                    typeSpan.style.marginRight ='3px';
                    expirationSpan.style.borderRadius='6px';
                    expirationSpan.style.padding='3px';
                    expirationSpan.style.color='#f7f7f7';
                    expirationSpan.style.fontFamily="'Montserrat', sans-serif";
                    expirationSpan.style.backgroundColor='#fca12a';
                    expirationSpan.style.fontSize='12px';
                    expirationSpan.style.marginLeft ='3px';
                    couponTitle.innerHTML = 'Coupon`s ';
                    usesSpan.innerHTML = ' uses '+ coupon[i].uses;
                    rateSpan.innerHTML = ' rate '+ coupon[i].rate;
                    typeSpan.innerHTML = ' type ' + coupon[i].type;
                    expirationSpan.innerHTML = ' Expiration date ' + new Date(coupon[i].expirationDate.iso).toLocaleDateString();
                    var couponBody = document.createElement('div');
                    var imageDiv = document.createElement('div');
                    var imag = document.createElement('img');
                    imageDiv.appendChild(imag);
                    couponBody.appendChild(imageDiv);
                    var couponCode = document.createElement('div');
                    var innerCoupon = document.createElement('div');
                    var innerCoupon_1 = document.createElement('div');
                    var innerCoupon_2 = document.createElement('div');
                    innerCoupon.appendChild(innerCoupon_1);
                    innerCoupon.appendChild(innerCoupon_2);
                    couponCode.appendChild(innerCoupon);
                    couponBody.appendChild(couponCode);
                    //styles for coupon body
                    couponBody.style.alignItems='center';
                    couponBody.style.display='flex';
                    imageDiv.style.width='20%';
                    imageDiv.style.marginTop='2%';
                    imageDiv.style.display='inline-block';
                    imag.style.marginBottom='5%';
                    imag.style.width='100%';
                    couponCode.style.display = 'inline-block';
                    couponCode.style.textAlign = 'center';
                    couponCode.style.width = '100%';
                    couponCode.style.marginTop = '0';
                    couponCode.style.marginRight = '2%';
                    couponCode.style.marginBottom = '0';
                    couponCode.style.marginLeft = '13%';
                    couponCode.style.paddingBottom = '2%';
                    couponCode.style.backgroundColor = '#fef5e9';
                    couponCode.onmouseover = function(){
                        this.style.backgroundColor='rgba(220, 244, 247, 0.46)';
                    };
                    couponCode.onmouseout = function(){
                        this.style.backgroundColor='#fef5e9';
                    };
                    innerCoupon.style.padding='2%';
                    innerCoupon.style.color='#444';
                    innerCoupon_1.style.color='#666';
                    innerCoupon_1.style.fontFamily="'Montserrat', sans-serif;";
                    innerCoupon_2.style.fontFamily="'Montserrat', sans-serif;";
                    innerCoupon_2.style.fontSize='20px';
                    innerCoupon_2.style.marginTop='3%';
                    innerCoupon_1.innerHTML='Coupon code';
                    innerCoupon_2.innerHTML=coupon[i].code;
                    imag.src = coupon[i].retailer.image.url || 'https://pp.vk.me/c9434/v9434837/30ca/1eXyrZWfcBc.jpg';
                    var couponDetails = document.createElement('div');
                    couponDetails.style.color='#000';
                    couponDetails.style.fontFamily=" 'Montserrat', sans-serif";
                    couponDetails.style.marginTop="2%";
                    couponDetails.style.textDecoration="underline";
                    couponDetails.style.fontWeight="bold";
                    couponDetails.innerHTML = '<a style="color: #000;" href="http://mon-coupon.com/vendorname/" target="_blank">'+coupon[i].description+'</a>';
                    mainDiv.appendChild(couponHeader);
                    mainDiv.appendChild(couponBody);
                    mainDiv.appendChild(couponDetails);
                }
                ul.append(li);
            }
            jQuery("#coupon").append(ul);
        }
    });
});