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

require 'test_helper'

class ListingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
