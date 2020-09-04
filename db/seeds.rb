
waldo = Character.create({ name: 'Waldo' })
wizard = Character.create({ name: 'Wizard' })
wenda = Character.create({ name: 'Wenda' })
odlaw = Character.create({ name: 'Odlaw' })
woof = Character.create({ name: 'Woof' })

waldo.create_image({ name: 'waldo.webp'})
wizard.create_image({ name: 'wizard.webp'})
wenda.create_image({ name: 'wenda.webp'})
odlaw.create_image({ name: 'odlaw.webp'})
woof.create_image({ name: 'woof.webp'})

puzzle1 = Puzzle.create({ name: "beach", difficulty: "easy" })
puzzle1.create_image({ name: 'puzzle1.jpg'})

Location.create!({ character_id: waldo.id, puzzle_id: puzzle1.id, xpos: 516, ypos: 358 })
Location.create!({ character_id: wizard.id, puzzle_id: puzzle1.id, xpos: 610, ypos: 358 })
Location.create!({ character_id: odlaw.id, puzzle_id: puzzle1.id, xpos: 239, ypos: 360 })

puzzle2 = Puzzle.create({ name: "street", difficulty: "medium" })
puzzle2.create_image({ name: 'puzzle2.jpg'})

Location.create!({ character_id: waldo.id, puzzle_id: puzzle2.id, xpos: 776, ypos: 840 })
Location.create!({ character_id: wizard.id, puzzle_id: puzzle2.id, xpos: 1180, ypos: 866 })
Location.create!({ character_id: wenda.id, puzzle_id: puzzle2.id, xpos: 788, ypos: 675 })
Location.create!({ character_id: odlaw.id, puzzle_id: puzzle2.id, xpos: 1064, ypos: 1067 })
Location.create!({ character_id: woof.id, puzzle_id: puzzle2.id, xpos: 1034, ypos: 354 })

puzzle3 = Puzzle.create({ name: "store", difficulty: "hard" })
puzzle3.create_image({ name: 'puzzle3.jpg'})

Location.create!({ character_id: waldo.id, puzzle_id: puzzle3.id, xpos: 760, ypos: 200 })
Location.create!({ character_id: wizard.id, puzzle_id: puzzle3.id, xpos: 1242, ypos: 54 })
Location.create!({ character_id: wenda.id, puzzle_id: puzzle3.id, xpos: 540, ypos: 830 })
Location.create!({ character_id: odlaw.id, puzzle_id: puzzle3.id, xpos: 358, ypos: 820 })
Location.create!({ character_id: woof.id, puzzle_id: puzzle3.id, xpos: 1116, ypos: 571 })