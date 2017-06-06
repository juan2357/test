import fresh_tomatoes
import media

# toy_story = media.Movie("Toy Story",
#                         "A story of a boy and his toys that come to life",
#                         "http://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg",
#                         "https://www.youtube.com/watch?v=4KPTXpQehio")
# # print(toy_story.storyline)
#
# avatar = media.Movie("Avatar",
#                      "A Marine on an alien planet",
#                      "http://upload.wikimedia.org/wikipedia/id/b/b0/Avatar-Teaser-Poster.jpg",
#                      "http://www.youtube.com/watch?v=-9ceBgWV8io")
# # print(avatar.storyline)
# #avatar.show_trailer()
#
# robocop = media.Movie("Robocop",
#                   "Set in a crime-ridden Detroit, Michigan, in the near future, RoboCop centers on police officer Alex Murphy (Weller) who is brutally shot to death by a gang of criminals and subsequently revived by the megacorporation Omni Consumer Products (OCP) as a superhuman cyborg law enforcer known as RoboCop.",
#                   "https://upload.wikimedia.org/wikipedia/en/1/16/RoboCop_%281987%29_theatrical_poster.jpg",
#                   "https://www.youtube.com/watch?v=zbCbwP6ibR4")
#
# # robocop.show_trailer()
# school_of_rock = media.Movie("School of Rock",
#                              "Storyline",
#                              "http://upload.wikimedia.org/wikipedia/en/1/11/School_of_Rock_Poster.jpg",
#                              "https://www.youtube.com/watch?v=XCwy6lW5Ixc")
#
# ratatouille = media.Movie("Ratatouille",
#                           "Storyline",
#                           "https://upload.wikimedia.org/wikipedia/en/5/50/RatatouillePoster.jpg",
#                           "https://www.youtube.com/watch?v=c3sBBRxDAqk")
#
# midnight_in_paris = media.Movie("Midnight in Paris",
#                                 "Storyline",
#                                 "https://upload.wikimedia.org/wikipedia/en/9/9f/Midnight_in_Paris_Poster.jpg",
#                                 "https://www.youtube.com/watch?v=FAfR8omt-CY")
#
# hungar_games = media.Movie("Hungar Games",
#                             "Storyline",
#                             "https://upload.wikimedia.org/wikipedia/en/4/42/HungerGamesPoster.jpg",
#                             "https://www.youtube.com/watch?v=mfmrPu43DF8")

star_trek = media.Movie("Star Trek",
                        "The story takes place in an alternate reality[3][4] because of time travel by both Nero and the original Spock.",
                        "https://upload.wikimedia.org/wikipedia/en/2/29/Startrekposter.jpg",
                        "https://www.youtube.com/watch?v=SyJszxnJydA")

star_trek_into_darkness = media.Movie("Star Trek Into Darkness",
                        "Kirk and the crew of the USS Enterprise are sent to the Klingon homeworld seeking former Starfleet member-turned-terrorist John Harrison.",
                        "https://upload.wikimedia.org/wikipedia/en/5/50/StarTrekIntoDarkness_FinalUSPoster.jpg",
                        "https://www.youtube.com/watch?v=QAEkuVgt6Aw")

star_trek_beyond = media.Movie("Star Trek Beyond",
                               "Three years into its five year mission, the USS Enterprise arrives at Starbase Yorktown, a massive space station, for resupply and shore leave for her crew.",
                               "https://upload.wikimedia.org/wikipedia/en/b/ba/Star_Trek_Beyond_poster.jpg",
                               "https://www.youtube.com/watch?v=bzD8H6o1awQ")

# movies = [toy_story, avatar, robocop, school_of_rock, ratatouille, midnight_in_paris, hungar_games]
movies = [star_trek, star_trek_into_darkness, star_trek_beyond]
# fresh_tomatoes.open_movies_page(movies)
# print(media.Movie.VALID_RATINGS)
print(media.Movie.__module__)
