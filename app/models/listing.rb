# == Schema Information
#
# Table name: listings
#
#  id                :integer          not null, primary key
#  host_id           :string           not null
#  name              :string           not null
#  description       :string           not null
#  location          :string           not null
#  longitude         :float            not null
#  latitude          :float            not null
#  price             :float            not null
#  guests            :integer          not null
#  benches           :integer          not null
#  power_rack        :integer          not null
#  deadlift_platform :integer          not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class Listing < ApplicationRecord
  validates :name, :host_id, :latitude, :longitude, :price, :guests, presence: true
  validates :benches, :power_rack, :deadlift_platform, presence: true
  validates :location, uniqueness: true, presence: true

  has_many_attached :photos

  belongs_to :host,
    primary_key: :id,
    foreign_key: :host_id,
    class_name: :User

  def self.in_bounds(bounds)
    self.where("latitude < ?", bounds[:northEast][:latitude])
        .where("latitude > ?", bounds[:southWest][:latitude])
        .where("longitude > ?", bounds[:southWest][:longitude])
        .where("longitude < ?", bounds[:northEast][:longitude])
  end
  
end
