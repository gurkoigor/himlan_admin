class UsersController < ApplicationController

  def index
    @mac_address_logins = Event.
        select("UserName, CallingStationId, AcctStartTime,
                GROUP_CONCAT(distinct(UserName)) as 'logins', count(distinct(UserName)) as 'count'").
        where("AcctStartTime BETWEEN DATE(?) and DATE(?)", 
            params[:from] ? params[:from] : Date.today.beginning_of_month, 
            params[:to] ? params[:to] : Date.today.end_of_month).
        group("CallingStationId").
        order("count DESC")
    @login_mac_addresses = Event.
        select("UserName, CallingStationId, AcctStartTime,
                GROUP_CONCAT(DISTINCT CallingStationId SEPARATOR ', ') as 'mac_addresses',
                count(distinct(CallingStationId)) as 'count'").
        where("AcctStartTime BETWEEN DATE(?) and DATE(?)", 
            params[:from] ? params[:from] : Date.today.beginning_of_month, 
            params[:to] ? params[:to] : Date.today.end_of_month).
        group("UserName").
        order("count DESC")
    @login_on_mac_address = Event.
        select("UserName, CallingStationId, AcctStartTime,
                count(RadAcctId) as 'count'").
        where("AcctStartTime BETWEEN DATE(?) and DATE(?)", 
            params[:from] ? params[:from] : Date.today.beginning_of_month, 
            params[:to] ? params[:to] : Date.today.end_of_month).
        group("UserName, CallingStationId").
        order("AcctStartTime desc")
  end

end
