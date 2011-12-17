class UsersController < ApplicationController

  def index
    @users = User.all
    @mac_address_logins = Event.
            select("UserName, CallingStationId, AcctStartTime,
                    GROUP_CONCAT(distinct(UserName)) as 'logins', count(distinct(UserName)) as 'count'").
            where("year(AcctStartTime)=? and (month(AcctStartTime)=?)",
                                Date.today.year, Date.today.month).
            group("CallingStationId").
            order("count DESC")
    @login_mac_addresses = Event.
            select("UserName, CallingStationId, AcctStartTime,
                    GROUP_CONCAT(distinct(CallingStationId)) as 'mac_addresses',
                    count(distinct(CallingStationId)) as 'count'").
            where("year(AcctStartTime)=? and (month(AcctStartTime)=?)",
                                Date.today.year, Date.today.month).
            group("UserName").
            order("count DESC")
  end

end
