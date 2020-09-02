# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

waldo = Character.create({ name: 'Waldo', xpos: 760, ypos: 200 })
wizard = Character.create({ name: 'Wizard', xpos: 1242, ypos: 54 })
wenda = Character.create({ name: 'Wenda', xpos: 540, ypos: 830 })
odlaw = Character.create({ name: 'Odlaw', xpos: 358, ypos: 820 })
woof = Character.create({ name: 'Woof', xpos: 1116, ypos: 571 })

waldo.create_image({ name: 'waldo.webp'})
wizard.create_image({ name: 'wizard.webp'})
wenda.create_image({ name: 'wenda.webp'})
odlaw.create_image({ name: 'odlaw.webp'})
woof.create_image({ name: 'woof.webp'})