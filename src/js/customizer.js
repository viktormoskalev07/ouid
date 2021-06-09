
const u= document ; 
function mainColorsAdder(property){
      const ns = u.createElement('style')
      ns.classList=property; 
      u.querySelector('.styles-var').prepend(ns);
      wp.customize( property, function( value ) {
              value.bind( function( newVal ) {
              ns.innerHTML=` :root { --${property}:  ${newVal}}`; 
              } );
        });
   
}
function coloradd(property){ 
    const ns = u.createElement('style')
    ns.classList=property; 
    u.body.append(ns);
    wp.customize( property, function( value ) {
		value.bind( function( newVal ) {
            ns.innerHTML=` :root { --${property}:  ${newVal}}`; 
		} );
	});

} 
 window.addEventListener('load' ,function(){   
      mainColorsAdder('mainColor' , '#172A2E' );
      mainColorsAdder('secondColor' , '#EAE1CD' );
      mainColorsAdder('thirdColor' , '#d7a461' );
      mainColorsAdder('fourthColor' , '#ffffff' );
      mainColorsAdder('fifthColor' , '#FDFAF3' );
      mainColorsAdder('sixthwDark' , 'rgba(0, 0, 0, 0.5)' , 'text');
coloradd(  'headerBackgroundColor','#eae1cd');
coloradd(  'headerLinkDecarationColor','#172A2E');
coloradd(  'headerShadowFocus','rgba(0, 0, 0, 0.5)');
coloradd(  'headerBtnColor','#ffffff');
coloradd(  'headerBtnBg','#172A2E');
coloradd(  'backgroundHero','#172A2E');
coloradd(  'heroText','#EAE1CD');
coloradd(  'btnShop','#EAE1CD');
coloradd(  'heroShadowFocus','-1px -1px 16px 0px rgb(215, 164, 97)' , 'text');
coloradd(  'backgroundShopCannabis','#D7A461');
coloradd(  'ShopCannabisTitle','#EAE1CD');
coloradd(  'ShopCannabisText','#172A2E');
coloradd(  'ShopCannabisBtn','#172A2E');
coloradd(  'ShopCannabisArrows','#172A2E');
coloradd(  'ShopCannabisShadowFocus','1px 1px 10px 0 rgb(1, 8, 12)' , 'text');
coloradd(  'backgroundAccessories','#172A2E');
coloradd(  'ShopAccessoriesTitle','#172A2E');
coloradd(  'ShopAccessoriesText','#172A2E');
coloradd(  'ShopAccessoriesBtn','#172A2E');
coloradd(  'ShopAccessoriesBtnText','#172A2E');
coloradd(  'ShopAccessoriesArrows','#172A2E');
coloradd(  'ShopAccessoriesShadowFocus','#172A2E');
coloradd(  'backgroundLocation','#172A2E');
coloradd(  'backgroundLocationCards','#172A2E');
coloradd(  'locationText','#172A2E');
coloradd(  'locationBtnBg','#172A2E');
coloradd(  'locationBtnText','#172A2E');
coloradd(  'locationShadowFocus','1px 1px 10px 0 rgb(1, 8, 12)','text');
coloradd(  'backgroundWholesale','#172A2E');
coloradd(  'wholesaleText','#172A2E');
coloradd(  'wholesaleBtnBg','#172A2E');
coloradd(  'wholesaleBtnText','#172A2E');
coloradd(  'wholesaleShadowFocus','-1px -1px 16px 0px rgb(215, 164, 97)' , 'text');
coloradd(  'backgroundAccordion','#172A2E');
coloradd(  'accordionTitle','#172A2E');
coloradd(  'accordionTitleText','#172A2E');
coloradd(  'accordionTextContent','#172A2E');
coloradd(  'blogColorBg1','#172A2E');
coloradd(  'blogColorBg2','#172A2E');
coloradd(  'clr-light','#172A2E');
coloradd(  'clr-text-main','#172A2E');
coloradd(  'clr-text-accent','#172A2E');
coloradd(  'font-base','#172A2E');
coloradd(  'footerFormShadowFocus','rgba(0, 0, 0, 0.5)', 'text');
coloradd(  'blogPageHeroTitleColor','#EAE1CD');
coloradd(  'blogPageHeroBtnColor','#172A2E');
coloradd(  'blogPageHeroBtnBg','#172A2E');
coloradd(  'blogPageHeroBtnShadow','#172A2E');
coloradd(  'blogPageContentTextColor','#172A2E');
coloradd(  'blogPageContentBtnColor','#172A2E');
coloradd(  'blogPageContentBtnBg','#172A2E');
coloradd(  'blogPageContentBtnShadow','#172A2E');
 } )

