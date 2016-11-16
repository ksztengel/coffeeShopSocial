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
  shops_id: 1
  }])
