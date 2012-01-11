class UsersController < ApplicationController

  def index
    @mac_address_logins = Event.
        select("UserName, CallingStationId, AcctStartTime,
                GROUP_CONCAT(distinct(UserName)) as 'logins', count(distinct(UserName)) as 'count'").
        where("year(AcctStartTime)=? and (month(AcctStartTime)=?)", Date.today.year, Date.today.month).
        # where("year(AcctStartTime)=? and (month(AcctStartTime)=?)", 2011, 11).
        group("CallingStationId").
        order("count DESC")
    @login_mac_addresses = Event.
        select("UserName, CallingStationId, AcctStartTime,
                GROUP_CONCAT(DISTINCT CallingStationId SEPARATOR ', ') as 'mac_addresses',
                count(distinct(CallingStationId)) as 'count'").
        where("year(AcctStartTime)=? and (month(AcctStartTime)=?)", Date.today.year, Date.today.month).
        # where("year(AcctStartTime)=? and (month(AcctStartTime)=?)", 2011, 11).
        group("UserName").
        order("count DESC")
    @login_on_mac_address = Event.
        select("UserName, CallingStationId, AcctStartTime,
                count(RadAcctId) as 'count'").
        where("year(AcctStartTime)=? and (month(AcctStartTime)=?)", Date.today.year, Date.today.month).
        # where("year(AcctStartTime)=? and (month(AcctStartTime)=?)", 2011, 11).
        group("UserName, CallingStationId").
        order("UserName")
  end

end
