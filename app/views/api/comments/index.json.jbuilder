@comments.each do |comment|
  json.set! comment.id do
    json.extract! comment, :id, :body, :pos_x, :pos_y, :time
  end
end
