class EventsController < ApplicationController
  require 'eventbrite-client'
  require 'json'

  def index
    clt = EventbriteClient.new({ access_token: '2GT6L3NCHSCTQQREGLKO'})
    resp = clt.event_search(within: 1, postal_code: 94117, date: "Next Month")
    @events = resp['events']
  end


end
