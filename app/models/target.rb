class Target < ApplicationRecord
  belongs_to :user
  has_many :target_foods, dependent: :destroy
  has_many :foods, through: :target_foods
  has_many :target_exercises, dependent: :destroy
  has_many :exercises, through: :target_exercises

  validates :current_weight, presence: true
  validates :target_weight, presence: true
  validates :user_id, uniqueness: true
  validates :name, presence: true, inclusion: { in: ['loose weight', 'gain weight', 'maintain weight'], message: "%{value} is not a valid target" }

end
