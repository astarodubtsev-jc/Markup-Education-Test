// This is an examples of simple export.
//
// You can remove or add your own function in this file.
import $ from 'jquery';
import listOfTabsClassNames from '../../configs/listOfTabsClassNames';

const _tabs = () => {
  const $filter = $('.filter');
  const $tab = $('.filter a');
  const $offers = $('.boxGroup .box');
 
  $filter.on('click touch', '.all', function (e) {
    e.preventDefault();
    $tab.removeClass('current');
    $(this).addClass('current');
    $offers.hide();
    $offers.fadeIn(700);
  });


  for (const className of listOfTabsClassNames) {
    console.log(`.${className}`);
    $filter.on('click touch', `.${className}`,
      function (e) {
        e.preventDefault();
        $tab.removeClass('current');
        $(this).addClass('current');
        $offers.show();
        $offers.fadeOut(400);
        $offers.filter(`.${className}`).fadeIn(400)
      });
   }
};

export default _tabs;
