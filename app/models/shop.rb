class Shop < ActiveRecord::Base
  geocoded_by :full_street_address
  after_validation :geocode

  has_many :deals

  def full_street_address
    [address, city, state,zip ].compact.join(', ')
  end


end
