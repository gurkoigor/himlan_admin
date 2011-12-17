module UsersHelper

  def verify_controller
    @id_proc = Proc.new do |controller_classes|
      controller_classes = [controller_classes] unless controller_classes.is_a?(Array)
      "dock-active" if controller_classes.include? controller.class
    end
  end

  def main_menu
    verify_controller
    result = []
    #if current_tenant
      result << "<li> #{link_menu(users_path, 'icons/users.png', 'Users')}</li>"
      result << '<li><a href="#"><img src="images/icons/main.png" alt="dock-icon"/>Main</a></li>
      <li><a href="#"><img src="images/icons/projects.png" alt="dock-icon"/>Projects</a></li>
      <li><a href="#"><img src="images/icons/gallery.png" alt="dock-icon"/>Gallery</a></li>
      <li><a href="#"><img src="images/icons/estimates.png" alt="dock-icon"/>Estimates</a></li>

      <li><a href="#"><img src="images/icons/settings.png" alt="dock-icon" />Settings</a></li>
      <li><a href="#"><img src="images/icons/page.png" alt="dock-icon"/>Posts</a></li>
      <li><a href="#"><img src="images/icons/events.png" alt="dock-icon"/>Events</a></li>
      <li><a href="#"><img src="images/icons/database.png" alt="dock-icon" />Database</a></li>
      <li><a href="#"><img src="images/icons/contact.png" alt="dock-icon"/>Contacts</a></li>'
    #end
    result
  end

  def link_menu(url, image_path, text)
    link_to(url, :class => "#{@id_proc.call([UsersController])}") do
      image_tag(image_path).to_s + text
    end
  end
end
