# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


deals = Deal.create([{
  title: 'Six Joints for $24.00',
  description: 'pre-rolled top-shelf joints',
  imgUrl: 'http://www.filsantejeunes.com/wp-content/uploads/2006/09/joint.jpg',
  shop_id: 1
  },
  {
    title: 'FREE Vape Battery and Charger!',
    description: 'Gear - Vaporizer and Charger',
    imgUrl: 'https://images.weedmaps.com/pictures/listings/761/637/070/large/1840200_IMG_0887.JPG',
    shop_id: 2
  },
  {
    title: '$20 top-shelf 1/8',
    description: 'Storewide',
    imgUrl: 'https://images.weedmaps.com/pictures/listings/771/462/165/large/3086552_Girl_Scout_Cookies.jpeg',
    shop_id: 3
  },
  {
    title: '$5 Grams! $17.50 8ths! $35 1/4s!',
    description: 'Indicas',
    imgUrl: 'https://images.weedmaps.com/pictures/listings/655/954/665/large/1846549_Kurple.png',
    shop_id: 4
  },
  {
    title: '2ozs for $250 Any Strain!',
    description: 'Tora Bora Indica',
    imgUrl: 'https://images.weedmaps.com/pictures/listings/980/177/684/large/3544265_bud_shelf.png',
    shop_id: 5
  },
  {
    title: '109 OZ SPECIAL',
    description: 'Sativa',
    imgUrl: 'https://images.weedmaps.com/pictures/listings/862/096/602/large/1342313_2oz_special.jpg',
    shop_id: 6
  },
  {
    title: '$99.00 Select Strain Ozs',
    description: 'Sativa',
    imgUrl: 'https://images.weedmaps.com/pictures/listings/457/820/872/large/3408522_Lemon_Skunk_buds.png',
    shop_id: 7
  },
  {
    title: '$100 Ounces!',
    description: 'Hybrid - Sweet Kush',
    imgUrl: 'https://images.weedmaps.com/pictures/listings/368/885/384/large/1874480_Blueberry.jpg',
    shop_id: 8
  },
  {
    title: 'Spend $100 Get a $5 1/8th',
    description: 'Hybrid',
    imgUrl: 'https://images.weedmaps.com/pictures/listings/176/201/002/large/3051014_Ambulance.jpg',
    shop_id: 9
  },
  {
    title: '$114.85 Oz of Critical Mass!!!',
    description: 'Hybrid - Critical Mass',
    imgUrl: 'https://images.weedmaps.com/pictures/listings/621/715/378/large/3439926_20160910_101409.jpg',
    shop_id: 10
  },
  {
    title: 'Shatter $25/g',
    description: 'Concentrate - Craft Panacea BHO Shatter',
    imgUrl: 'https://images.weedmaps.com/pictures/listings/748/673/759/large/1630084_Screen_Shot_2015-09-10_at_3.15.25_PM.png',
    shop_id: 11
  },
  {
    title: '8 grams of Wax/Shatter for $175',
    description: 'Concentrate',
    imgUrl: 'https://images.weedmaps.com/pictures/listings/820/927/683/large/3290325_aphowaxxx.jpg',
    shop_id: 12
  }])
