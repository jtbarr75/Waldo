module ScoresHelper
  def formatTime(time)
    minutes = (time / (1000 * 60)).round().to_s.rjust(2, '0')
    seconds = (time % (1000 * 60) / 1000).round().to_s.rjust(2, '0')
    return "#{minutes}:#{seconds}"
  end
end
