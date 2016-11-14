class Shop < ActiveRecord::Base


  geocoded_by :full_street_address
  after_validation :geocode


def full_street_address
  [address, city, state,zip ].compact.join(', ')
  end

end
