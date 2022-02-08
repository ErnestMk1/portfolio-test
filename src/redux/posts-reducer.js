const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";

const initialState = {
  postsInfo: [
    {
      id: 1,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW8kTnp3ZUx6MNsVhDbfsHRun5kVo5GVbCsWiI6JK0lTuSV6lG9dIvagZYB0bbjPtLkn0&usqp=CAU",
      message: 'Hi, how are you?',
      likesInfo: '5',
    },
    {
      id: 2,
      img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGCBUVExcVFRUYGBcZGRwcGhoaGiMaGhkZGh8cHBkZGRoaHysjHxwoHxkZJDUkKCwuMjIzHCE3PDcwOysxMi4BCwsLDw4PHRERHTMoISgxMzExLjExMTMxMTExMTExMTE5MTExMTMxMTExMTExMTExMTMxMTExMTExMTExMTExMf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAIDBAYBB//EAEQQAAIBAgQDBQUGBAQFAwUAAAECEQADBBIhMQVBURMiYXGRBjJSgaEUQpKx0fAVI3LBQ2KC4RZTotLxM4PiJGOTwtP/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIEAwX/xAAxEQACAQQBAwEGBQQDAAAAAAAAAQIDERIhMQQTUUEUIjJhkaFScYGxwULR4fAFU/H/2gAMAwEAAhEDEQA/ALOSnBKuCxXewr3O4eRgUwlOW3VsWKcLJozQ1BkVvCz95R5mpDhiBo6ny/8AFPFmni1UOXzLx+RVOGPhTewq72R6Uuyo7gsEUhYpws1eFrwpwtDpR3AwKIs13savi14U4WKWY1TKAs04WavjD04YWl3Cu2D+xrvYUQ+zeNLsKXdDtlAWa72VXhZrvZUdweBQ7GnLhZ8PP/arwtU4W/Ck6gYAxrEU02vCi3Y+FLsKfdDAFC1T1s0VFil2Ipd0apg0WRXDaHjRLshS7IdKXcHgCjarnZUW7EUuwFPuC7YINrwrhtUY7Cudh4Ud0O2COypdnRf7OOlc+zijuj7YJ7Ol2dFfswrn2cUd0XbYJ7OlRb7OKVPuh22UglOy1ZNscproteNccy8GVgtdANWxYrot0u4h9tlYTThU/Z08IPEeHj50u4h4MrgGuhasdn510W6MwwZX7OuqnhU4SnBaWYYEATwpwSpwtdy0sx4EKoTypZasBacEpZjwKxSlkqyyUglGYYlbs672ZqwEp3Z0sx4FUKacAasdn+ya6EozDEr5TXVSresRJj6U0W6WYYkJXpTlsEiY0qXs6XZ0ZDxK+Sl2dWclOUDpRmGJU7Ol2dXBHQU0pSzDEq9nXMlW8lLLTzDEqZK5lq5lpZaMwxKeQ0stW8h6VzIaMwxKmWlVvKaVGYYlHJ4/WllHUV56McT95Y6jWnDEE7N1jQ67dAam68l2PQAo6j1pwA6j1rzlcQ/7H60lxbTH9p+lK68hY9G06j1FdlRzHqK84+1k89xyA36RXRimAnvRz0EjzE/3pa8jsejFl+IeormZfiX1FedDFk7FvQTHXeujFE7k/L9BTyXkWLPRQ6/EvqK6HX4l9RXnYxIGpchebFZj5fP9zUtt1O1wQeeVtuu3lRlHyGLPQM6/Ev4hTu0X41/EKwJdJE3RrOottH5V0XkDD+bGkybeg6CP70skGLN92qfGv4h+td7VfjX8Q/WsAMbbGnaa6b2lA8vdJ8a6ceAI05f4Sz5xvSbHib7tU+NfxD9a72q/Gv4h+tYW5xAf5dtYsqu2o3B9aibGAk8undAkdYCf2pZIeJv+1X41/EP1rhvp8a/iH615+MXPMmRpEePhT71+0DBVzpqZj8v1qk0xNM3hxKfGv4hS+0p8afiH61ibb4ORIusDppIg6RPfI1E/s11bmAAk27k6aFz9DnA67xtVpQ8kXl4Nr9qT41/EP1rv2pPjT8Q/WsYHwkgDDSTtN5dfCe2onhuHYdlk2Ap6Fwx85VyIqsY+ScmaEYpPjX8Qpfa7f/MT8Q/Wgf8ACrI2sj1P61OmFtgQLQ9KMEGTCpxlv/mJ+IfrTxiEOzr6ig3Yp/yx+GllQf4Y/DFPBBkGu3T4l9RTheX4h60FzKPugVwXVpdseYc7QfEPWl2g6j1oEQh+7Py/2phVPh/6R+lHbDM0OcdR61wv41ngq/Cfwj9KY1q38A/Av6U+18xdw001yazPZp8A/ClcKW/gH4V/tT7XzDuGnpVlsqdD9P1pUdn5i7hlmtqS2S2yqG1zMGVBEEmQNvPnVcspIUOQInbQkSBpM6nbz6VTL247oYTBbK4gGNQZWSN/3vXtW8rk6GdQMoGmsSZg6GNvzrDc1XCxCFrSq2VidcwyifUjfoPSrtzhgaALgB21JIzbkggfl4daBPErI2Hd0A+cjn5RTXuwJJIIETmnfWDO2/P61D3wxpmgscGuOQqlX7uYokzlJOU68pWPELzqE8GxKr31CjUjMcux1ABMExy59KCPiNJG5G4XT5gaHz8abduOQDAiSQCQfUKTl5b0K4Nhg2MSqzFxVAOxfQakQCRpE0+7ccWw1x5ECB22pnqhJPIzI9KBNiszDtMx/pInSNiZH7FQXQq6RIbWGOaBOmqRG3Ma9NatE3CgvxttzMyCOhEeP0piYhzsQDJ3kaDnEeO8jeh+DCz3iwE8iTpzmT+/Cra4hhoLh12ULpB0B7rnw2FJjLmHvFoQICQTAA78kGSRz/2p+JtXLYBe2F2B2nNG+UdfKmYTC4q04dVVWIjRxqJkhp5eBqbFW77sDcUZoWYZCWC8wVaN6TU0/kF0PTBvkzhWy5ZBCyxHKI9dap22yyoVCZG+jQdQIIA/8VLdS4VNs271tTqxCNJjuwWAAy6A+PnvVxXET/MDwUJjeRrpmiBBJ1HkKE5A7BKyzIXDltonSJ0IDAieZ28d6hW4NVbPIgRBOsjmCBQp+Jp2a2g0KGJAJJYMRESTOgjwpwv6H+YyMfum3APzzCdhyFJphcMC24AgsQWCicy97kDmnrOn9qe2DuglVGcAFmyksepjRR6TQZeIMSQrnMeYPe6RlY6c9tvSn/aXMW+0InugDQbbFpjkPKl7w9BNEmTlYKBJbpyiCdQdtP8Aau3woJlteY0jzksQT4UKtnOQqsZ8Gjn4yOvrV84dgx1EDVitwSRqMxJXaY1Anw1p5AdtlSW7zQNJydN80HT6064i5TluIzTsQRoYEifMCovsVzcZDoxlXB0AmTpMazMaeE69s4TP3Wv211gANMk6TED6T4xVdwVvkTWe1juMu05UuZdNNCGI01mmI1x4ZtN4zXYMc9JkbTHhzoknAhllnYXFJzZLgBcQCIV12jpE1DhuCqe0e7KqBK5XBI65gAQCAVO350nWSDArm9cXUXVAmRN0anmcpIO3XWpv4leXuC/bE6mO+ROumkT/ALU7h97D27bdorjKTDHQOGAAKhgM0QDEc5ikt5We5cNgXLRMIAFLa6Zs6awY3IjXqKSrNBii2eN3ie4huATBVYDGPvAktpIMKR9RXf8AiO4AC1r5yQJ1HjzB9DVa7irhVThgtpBuhIVgdCM8kyCII8PHSn38TayKzdndu5JHfLqessJA3O9HtM0LtxLFr2kJ3sAwOvPzK7V1PaG3IL24UwFAkEtrJkkArERsfWgNjjrrCZlCfeMFCBzylR0mkuJW5bu3BcJYf+koAy5Se9LZYJg6bnU+NdY1Z+osIsP4vj1oe5bZh1mB9fGm2+PWYlkca9Qd/wDVWes3zbXOVXUQREyG1OaZBG2sbxUBxVtBLoCzHQkmF6gKNMwE+oiOfRV5ehzdOJsP4rY/+58lJ/Icv7008VsCJa4on7ylR5kkbVj8RiEJ0kKv3mUAwNNd4PkT51E+YtFsXNu4wG0RoZ0B5giuirP1E6cfQ2X8aw3/ADD+Fv8AtpVlfst/4m/HH0BpUe0ryie38irYtGdbixOgA0Hh3T+tOa2hjYzzBIH0FdTC5FyhCSde+zDyiN9vpUbJdQE28tst78d0MCZyltt486xZX9TQMu4i0PuyQAI28RzHT8qkS6SCRbcx0tkFucDTcipLb3UCsUQwRqYaJ3g7yJO2tTrxYg9y+8HSDmbbeM5Mcto3o0FxvD8VbAcXMOzXArusypgLmMkERMR151ocTbwqG0Fw5ZnyEDPIytvOdtYjWdNRQe3wRLrhxduM7e8GDgGROjjKAuu8Hyo9jOFKVS2zWrTAZc9wm44G/czwvLWDtPy7LFpWWxb9SpbwrrmH2W252WEtEbwJjwk/OrdhLpOV7Nu2uuXMFcjbQ2lBI58quYL2Wsqo/mM7cmtkajbVQoI3+P8AKuYn2cdJ7PEAMuoBt98amIZDcP3iKG0v/BpMHY/2dt3rjMLi27cRks2zA1YAtIWCdiI+786AY7gVtWgXj3TEsoUDWNWzx92NavYntbYLX+0Kgyqk3UUzO5BA5nfqKh4Xdw1y9F2bSR7xc3O8YOgKmNmgc53G1cu4vRMeIVxXCsaRlCDad+pmJ1B8x9NqocNN63cLvqV7RMqSXDGTBWAZnoDWmwqYa5HZ30UTBPZhNYJBBIXkp8NKq8awt9HNuy1vslUwVysDO5ZcxyQdus/Kh9RNemvzI7aKeHxl1ransLpOS2CWIEsvvHvnmTv4VUt8Htq4us7nMS5tsoKy8mCCBME6Gd1FWsNw24EAN15MalmiRMR3gY12nWpk4HbyqpI7ojltM8wf18azz6py03b9CowSBRweFgkG7sW1ZQNNzNuDpryruJ4fY2Dd7KTAe7I0kGSDJ+XOtFbwKZWQqhRtGGgkdNBtT7HB7CiezG0DXMIHLvE6eFTHqV+Y7XMZZ4etwSqXmAAzFWDTM5YLKJnXSosZwcqCQlwL94lFESYBEHcfLet3e7NN2CztJC+gnWojjLcA9omv+bvcht8xTVefpEGZHC+zblgpuBIQHW2zATGnITPITtvUzezVxfcxKnzRlH0mjV32hs28wm4SGKxAAYqSDDGOlUH9rszAJb75IJA78r1ECesxMRRlWltIWgY/A8SB3XttyEMQYO4MqNCNIqHE8IxKiMinLuQ6AmdQDqDGn0orf4/flrbDIRMvABEnYx7h0I1WfCgmKxBcZu6TyBkyw5sTGseB5V0gqn9Vg0SG5i0mS0RE5l0AnuhpMDUegqNOIusEypBJDqe8FMHQ8gf+ru7U7Cu7wCDJ0BUAkD4QTEb9Y8qOYbhBZyxa6FhVLSQWXK2ZlEDUMEEEka84FdbL1sFzM3OOFcy9o/eG8A5tjqOmw/estnj5yC1m0MkmIk6gDoBH70EbN+E6qFvOAQvvRcadj3VB3kEeTeFOwnBrVtu8czgk5rgVJzctO9sJjKYk+dS5R8FKMmZPA4lDba3bAWCuZy5ZZPhBjTKABp3TrVvH8QYgEsl0ZQM6rlJ0GhJ3A057+G2kPDbLDuYO2cutwZcpBgxqdzJA93lpPOS3wbDDe1ZCwdFDZjqYnaPwEUnJL/IYsxp4fdKgi2bincsMkCAGXMDGxmau2+DkgKjENIkTn3nZU5iR5xWsxLoCmWzngyWzbnUQVc+7rMDoKmGKvAGFtgECFWEU66y5O/km43ozvw19QUTN3/Zp3UiWt6kBroUEiB3sqmSZnfWornAyh7qpemCxYtbM67ZY6Ded61ds24PaldT9zSByGxk9dQKbiLSSDaS4pEwe1KH0mZ84pQqzcrJJilFLkzCWGtROBA8rusROha2fod5+c68RSJbDXx5kHfzVeVGP4Odwx/8Ayf8Awk1Hc4Tc5E/I5p9Yq5Kry4r6nLLwwT/EbfwXh/7Sf/0rlEPsL9X9F/76VTjP/r+4835MxZ4VigSGDHMDIyZTtBym466DTl0qazwHEXbWXtbWW2wJUs11wdNGRAJ57SOlapsIyjOl1WXRf5s9mBPMOTry0jXrtUOMCfzRct25V1CnVlUhQSNcpkTIA67iqlKPNi8QDhfZrD5sl28cx1CLbe22hOkMzGfGBRbA8LwdpM6WmuhdTmIcgEjU2y2g0mcuwqS24VLTdq90LcbMrLAUkHVlcFuzXrm0geYqY1LSu3bWSQwINwuWYakyokrHQb7aVWUQ4L2IxVq53VuWskCFuq7SCJDA51I56GAKit/aXOa3flSWAVkzW2y+8LZ7QkieZ6dNaGJxG49tGS8uctC9zIpAzKpzlGXQGcuh8aI2Uu3AW7G6xkKQs5WIzZmWFdRLHUkgHfnIabXA9S5K9nDXw5INqYDMFRlaNwQbRMxzgk841olwy1jlGRMTaQbqrSbhkTmysM25kTB+tIcBxOUOc1u2oe4ysQcjkGYU5y8SYiNRttVjB8HdmZ+2ywylZDIhCxmQknmSzbaSaHKT5GopHMTi8QzFWe4wDLPdVRl56MGnafnUeKs2riAXQpIzFcykGNMuqEk8tRHlRC5jLdodndsIFIibVw5Y8mrmN41gbbA3EZnPVQ0A8zBy/d6TpXOUJ3uh5RM5j8FhmgshzlhMnO+ciZyxLAAbmZJqTAYW5bNpVW0XuFoDW4IIMa3VBYnWQRrv0gG7vFcKSWt4R3bXvrbFtZ5HPprrAO9U7HFsP2bO69lkUoqWnN7ICCJJXuqw2kT50ShJIWUWDb/GOzLW7wud0/4dwsg8CSD6/Whqe0wNxltW5Cg6syjUac40kqPnTMXwcZ7fZtC3ZFtiQnlIze9JGsRtO9UeJ8NYXLlot319+4D3ViJLkDYHc7Vxwg/iQrB25x+5mQFFgoWYh0OUwSFiZ1gan4hQHH8Ve/cFvUFipXYKCBMltdN9Z/Kn4bgyjO13FWwAFBRVZjHdIAMRBIGtXf8Ah+1bdbfalgU7T+YChVToO4O8w5iKuFOmndbCwGxmJu3HMw4kgEDLpy0IEfl506xhmlZBYSCdlOmneXfpzjyrbcI4Rgmy/wD1NvNuSgFssW3ntCSd9ojWtNg+DYYDS2HA0BOvp90b7iuy1whWPLLdl0zdxXYg5Q7DU/dChjIMnnt1q5hOAM0XLi5AAGLMdASwEdoDGsj9616WMNhZIVlV5GbI/fnlOpPSuX+EICC2JdVPJiNfAbSfWm2/RBivVmHPB7OfO9w3Aw0VFa5voACvvHfrt5Ves8HwiMD2QLGNHPZGAYJyEajVfHWjuIGEW2yFnYF5I5Ehu7IGWIIB0qij2ETuWwoMFSTmHMgjMCw57ARSmrRyd7CWKOubSmFWEESba7Tm1LPsNuWvyqovtZhGuhXW6yh8mYhFCnMF7wD+7pPu8xzq1cuJcVlZlOZcra6wdwGeGANZ3EeyNoAst66AATBCuZGwUMNdqKFSjvJXCpk/hZshcwrIc2ItBBOmdFiZEGDOzFcuUVxMbZZCbDByJBYIAJ1kSxB68qwFzgEGVuEgmWLKAQSeQXca8zV/h2BW0SVd5OhIOUHnsvlzmprVaEFp3ZEak72a0aDEBRo1wDMdVUjSANSEkneq9xkX3Tm8u6PmW1+lD8gGwj5RTWNebOrk7pF5E9zGXJ7qR5d6fM66+UUx1uP3mznxP+9VnNM7VhME1OWWmTcsAEcz61Ot9xp2janrPXrVe5inVZbbQaiTrsBI56U1sTJByCNeRB5chHjTjkldOwaL/wBrufF9Aa43ELg6aef9qo9qPhI8jH5g1wMs7sPQ/pTjXqx4k/qGKCH8Sb4fqaVUcy/GfT/euV19rrfiDCJnMLj2CwLjFVIJAmNDOkSDruKIYPjNzRluOC2pUkMlzYSVYanKAsyDovSqON9rjJtC0qeDJKkjUGP7xy+VQWOLM5P8vJrrAATmRo0ADYR6862XafBbt6M0fD7CXDrbYMWuZSHHdQkwBZb3wJnugnSPCrODwdwowsMjgNmysGtZW96cl1Xlp2Og61mbeKmADlbeBJgjryBHXlWz4hxK32du49xc+RZXKrpLRJY76kzoROWnnraBJA7DW790Rct5WJAz5uyfKpEyoIDE7TuJO/Mrh+JNYVrdtyio4UDXQZVMHNrzNR2rb3bTxcNtIXs3VbhBEbhSA0HfMCY0oP8A8I3crIt12tuScwQAFjuSZJAP+aDTpTV2pfp6jknbRs340hHfuODoMoGczvtmgaeB0oXf9pLYDFLbMBJLPcFsAiYGTutygAHccqzvD/Z/EopHaOVaA4tKWz797NmFsiCB7x2IqTGcBt20UtcTPyW9e/O0iyxnSMx3FDqJPSC0rC4z7RW7ie7ZXQZRkLsATrM6b9GND1xTXLyNZtklMo2AUEGVaRsCeh50RtpZHZ2zYZgUGoQKpfTa46hsviCeUa1ZN9bdwBLNq0WaFJL3XJ6BXCgHXlNS62rMWIPxGGxjXSzKqtoY1vZSAJhQLmUmdxBg069w7sVy3LtxRcMFVypO26iSV73wjajIW6JL3mBnRcwXfotvIPUnbahPFWtFltpYXNnBZxAOsaRbWW9DHWodZSdisUht027eW2LZudmJRjmyENqy5WULE7nbz2o9wvjTkoBaXMFl8uhge84yrAUk/EeVM4XwdWDEYsLrLgEMyz/maCOY2qTHcILBRYuC4F94BgWuRJh2MgbAQIpb9B7RZu8aR1XLYuZWgsWZFjUEyNzMbio719bomwi23EAM1ouuhJ1Clh01IoLcw1y2wC2Wa5AUg2+7E7gsWA5a0Uxlu1Y7O5i7jISe4pYGDuM+oIHgvrUwU5PgG7cmX4hwS8ozBrThZJyOIO7NI97xiOvWpOCcOxAYMiXVXdcjMobpLGARvtBrU/x/Bh2KBLt097+WpOhj75DPMnkABVHF+0rs+UratEkBQxDXGIkDTUncxOU61vhGb20jhJxXqAOJ2CuJTtLdxLWgYuGXMxzFspO/IyDyoxh8faCd5yAWIykwGBJAk5Ruuv05VYXAJfVftRuNdHNiUk+CyQnTUctaYfZvDBezWyFM75ip+cbHxAAqlOzdwwfoQYjF5VOUoX5KDndjuFDAFSd4lgTVVL911ZnuW7SgAqT3wTM6DTMYmACeoO0mBw2zZCMbhR5g9zMdsoBdp+7zG8E9ahx6NdVvsSC6+cByxHcyxANt9IZZEiOdRUqOUcWtDUEtlW9bu+8iC4uaJHckEAggMdZJy+Y8qgx2KNoxdU2yRInWfIjf5UTxvB79xQmKu5VYhltW0zuY2GZQF0jnO1IdlZg/ZbjiQDcY9rc0PiygCOQ6+FYZdPTXBaV2UcPxHEuAocdmABLILatpuyr321O0gSKtYIBSWcrdMRsAg8Qo1nxJNK5bsvr3kYnTcAeG7R8hUT8LZe8r5gN8jpc9dQ0fKk1Kbve5cVCPId4bhrd9goCr1IciB5EmeVEL3skn3LhH9Sg/URWGxWHLCDA/p7rSNjmuLI8gflVPjt/FZba2mu6HXKTDb6tlJUsPADQHStFOhTl7suSJv1S0bq57JXJ0ZGE8iQfQ6fWhmL4JdAOS2zAFgSgD6rMjuk6zp50J9k/afGW7brcdmYNs8QFMbOxHQ6AnltM1o8B7bsoGe0gT4kb+WFjQSmbKPMCh9HC+v3IvoD4jh7pMo415hufTp8qrvpvv9frWoxXt/ZNshQRcI0B2843+njVTAe02EuPkuAudm76uAecBd18QTXKXQuW0wulyzO3ZFVnu9K0HE71lyWt2wbUwGKlSSNDDCAR60Lu2LJ2Dr5MG+hFZJdPi7XOmDaugf2h60q5eW4CQt0lRtNsbdN+W3ypV19kX4icX4MymI91kChgIPd1ynWOekz9K7hWuXmyhGuFJ92cw6sOnIfrW/wD4PbRUtrbtOSwzl1Nxgo94hvdmB0UVZZ1tleyK2kWcwAUh52GW3sfKN61OUIrZWBhuF8Axdy4P5d1U2JYwgHXvmPGAOVad/ZZGdUfEW27MDMrS5APgpUCY5zU1/HlnFw6MqsF1IMGJGhI6bxtzirWCts6lyQk8zNzbf3yQBryipdWLfuoaigpw/FgfyrSjJbJWYCgmAe4EGXLruSNfWpOK8RyIwZZcCUVtieUEgrHjNCL1kEd66D4E6ek/lT7eBJAQnMmhyNbFxBMwcraAnXXQ1z7kuEv2KuQ4n2muKtgMo7W7IiRkOwWYM89QWjSg13iLW7t1wqKiKyMLIC94nRgyDKNdNdY0ouMKJN3I8KCFGYCyCeRT3gNtAzUJxGFNi1cZGFtrrCWsl7iwNkYsQySToNNxuNKFNS5+39hNkmEx9xrdt3DKXbK2eUEMdHDHukaCdetWnbCu3Zs03UPeKyRBUwA3LfcAzpvAgbxixmSwyZXcaXbhKjcyCczHZdOsAdKmscEuLauXcHeF1rnvbAgHUqV1UkAjQnTlSUIt3iK79SfC4VUul+2DCIhwzDzACASI5g786dgLRvPcFwG3bUauANB0IUgAmdANT0qX2e4STYYXg9soIBVSztqRtMaeA57kila4FispW3ci1mLAXgcyn7zFV0mOZ2FT25Xvb+BlbgQs9rctO2IW1OjXGATNG5gDXpB250X9leD2w9z+bauIM3Z5DmyNoA3idT6b0PxNjCqjFw98qZJQstsMAOamIAHjz8af29w5rdo28PkWcoQjKJtgoWZSM2uaVBjXnXeCSe7foJ6NBwbDXbKMJzKSCXbcMjtmUBdSIUAc/OqHHuE27+e4WS5JkdyQsx96c0HXUDnTEwLWkNwYtQ7CA2d3bq6zOXKzDkqnTesphvakYe8Va6bqljmYL7hPvc9VJJla0wjJbWiJOPDNLg+CIFyg6z7igW1byy6k+Z1qDinA7N1coVbV0aK4EAx924P/ANtxRbD3UuKHtkEMJgGQf8yHn5bjxqHj9gMqi7cNonmutxhpA7Md9ucEfOaqLk5chJRS4AOD4xcsP2GNBEaLc3IGwJI99PHceOwO2sRcLBEtG4m/aZ1AVOTKZ1SOumh2gxVLIiLbVAQhlTfAdgebLaQ6T0Z18uqxN9399swGoDquVT1VAuUH1PjOtd+1rJ2S8v8AczPqIx1e78LkvnidtF0btSp/wyCqnp2zEJ5gEnwqn/H77Ew2VeSppG/vOVBafBFjrVG9ckzOc9SdPLX/AGqvcUnf02FZanV9PT1FZP6InKtP5L7hDGcVZ5zuW6qDp8+vzJpmF4iinvIf9L5T65TQ/sx5fWlHSsU+vqvUXZeEkUqMb3e35ZoL3ELDJC9oj6auS6xzHdM/OPlUmBtW7hhrqgfdC3CWPmrKPzrMN40wv+96cOvqrTsy8Ffg2l/gxiEdGnmy94DwK5hHmOXKhGO9nbhbOA2YbNZuFTz2UEidT92gtnGOnusV8iR9BpV217RXl3bMOQYSB6RWmH/IK1pRJdNXuroYLTJmS47GTOW8ikg89QJM/wBPKmYXC2kOdraJJjOqbcgG7I6Gi1v2oVxlu2ww6gg/9LD+9DsdiEDB7BYKZ0IgqRErMmV1GmvOtMJUeoeMNS+xE5zpLJu6+4+5hQ3uXBcPwo2dj/7bKpqnfsMp73dI2zBrT+O23rFMa4C4YW1zclAlC3Up08BA6RRDHWsYbaI6ZlbvRaRshzQRnIlSZMwDAmstbp6lPbS+ppo9RCrez+wNKuoDRcVI1yGbbdM2WV0PjpXExQJCg6mYE9NTRW3d+w6sGa+47loGEA5s5BOg2zEdQoJ1oEyNcuNduEPcbdgIVR8KDkv1PMms0opJX+h3yLNmY907nl4mlTcPZJUajbrH96VO7Fl8gm+IZtyT01n86jJboT9foRT3I+6vl/5qMrGpaNPp++tYWkQ7HTM66eWv5bU4Kep9ap4Dilq4SqNJE7+G8VdV51B/fh1qW5LQXY+0BzKqOpMAeZolYe2F0uq4/qGWefdGlA+PYG66BOyvPmj3BkAjYl2EDXw5UT9nPZk27Sq3d5sJznNpMue7yGwrXRpySysUmwX7Q8YuqYt25tgmXJGUgR4yI67GfnVDg/DHu2me4Bd1lchLEAHUZ82UEgDY0dxXD7Ny6ctm9iGQ6qxIRSAR96BM+vpVZMM9u4737owls7W1IU5ToAttTvodRO5OlaHBPb5FbZSs8OSyDcxNhgruqojXAzbyWyKRGmkCTry1NGeG8StWrYWxbu3C+UnKumYKBqx0jnpIMkzQn+KYRgGFm7du6+82mXNoxEjNICnaouL+0GLzIyhbSKCqqjAA54EcjIy0/dQ0rGh7TGZWa5csYZZJ78u4U97lGoB6darYq5ZtFH7e87zJLXezV+ZhRBg6bRECOc0+G+zeIxSkvcOVjDHPA8QQu+3Na1nAvZCxaEsBcbxUAfhFG5DAWG44t+0+HOHe4hYqotFpIEd5pMxm3k8tqdjvZW8663GRNNLihsqgDbIfACG1MAzyrfYfDqghVCjoBA+lVcbxq1aB72YjcLr6nYVaj9R/mYU8MwuGW3bu3TdeZTtXCoJOrFVMwATvI8atcRw2Ba2Ht2LVxDPeVgi8hCmQpPhIMAwDtRVcbg8csOAjToe66gzvDArOm5X50M4t7L4he+h7cfENXjl3ST/0k1powUpe9Kxnr1JQj7kbgmyyWlKWibVsmStqQSdZPbXO98kVD/mNdt3whYgKhb3oHeb+smWb/UTVrgfCDeW4zsyFWyAAAFSACZDf1DpzqLGezN5DKxc8u63oTH1qupruj7tJXfq3sywhUqrKb14Wiu+L+ER4kUztGOp1+dRPbe2YdWQ/5gRPkTvTw/7FeLWrTqO822/99DRGnGKtFWJcw50g3TSuAePrSPgKz3KsOJ6wfoa4Y8RXB+5rub5UgEbXQ1C9vw/tUxauZ6pAVHt0wWzOlEbWHL8oHWrCWwvu7/Fz+XTz38q19L0tTqHrjycqtaNNb+gOt4WPf3+H/uPLy38t6nVCYAVjsAo5k7KIB8es60VwPC2uaxC6EnaB8RJ2Hjr4A7VY4vixhUBtW1eDDFh3YIOqqTprG8k850j2oql0qxhuT9ThCnUr+9PUV6eShhX7O2r9n/MYSMw0UciZ9/rERqJnlXv8Ra0Gu9u6zq5JIE9fE/7Ur123bsi65yqVBHVidMoA1zSCI8Ko4Pg9zFTdujKEgpZ5iZhnH3nPhMT6+ZUqTnNynf8A3wehCEYRUYopYbF3Lt03nModFW4AWYEzmbSVGpgePoQxOJtC3cm3lbI0MhJgwYkE7VMcIRoZB6RRjh3CAgzMJY7A6x5+Ncqc5TnpaR0x0cscHtBRozab5jr9aVVf4vas/wApmBKd3Q6QNufSKVarQ8fYRmeEY65bR2xfckjKpYS3I92dgRvHXetEcFcZA1m0bgbYswRYPPvakfKgGHZHsCyli5dZASbpXspBIkKurkHbUA7noK3HBMYww6NeiyDCoD3dOU5yTr51wVCLlv6EpGU4xwE2sOwe5h7N240iATOuZgCZYkwNFUx+Wk9ibLW7YsgpduKWzXFKQBOx7xf6AVz2oSxbKXLtsuzMEzrJ7MQTnjUaRtBknYyaZb4euEXPhbaqpWblwh7l1tRlAAOZ5kyCQNa09uPpyHDCy4u2xZe1VmUnMqMCR+GT9R+k74mzcUW3nKPMA+BjWsVx9luHtEtCziQw7ocK9zTU5Ae623va7zprVr2Txt7E6dnmUb3QQAPBh94yCO70251Dk1LFopM2pwoW3lsZE00MZgB1319ax3tL7M3Bnu2j2mczdtwBngz3JmD4elaPDlbUlrkATMmF9N5/LnuBUjcVtlScrHaIiG8jmj5kgUND5PKcHd7MyELqM2ZBHaW5IIC90bAnQ6cqK2cD9pti4IySILNkVCWGpBg5tuR2ouOM4VnuM1sWLhEC72a3ACJnMI0Ow/vQu57M4m8wujKpKgi5nBVwdZYSe7rMa+ZrnhfbEtaCuF4feAFzCX0uFd1tsQwAEFWDanXrvFEuHe2JQ9nirZtPtmymJ6sun0Pyrz7Hh8MQ4uM7xKvbGWFBIEBQJXQwV0Ioxw3207RcmKtreQaEmA4GVmJkf0noa1Rh7qSVyHNX2a/HPeuRF0Padgoe2C6iebKIA/1GreB4BbzrcF43EB7ynI6s4mDOXSJ2HQUC4ZgrTMWwGKa1c52nMid4Kncajad6tcRuO4VMat2yAdbtk5rLidnXXLPyPpXKSd7fYtNch7iHAMPclmQId89vuMOpJBg/MUM4XauhRcweJW7bP3bndJ2MAgQTBG4+dE8VxEW0FzOr2TAzKM0bySwkBdhqOdR8H4dhWuNftsXJMxnlUYiO6o0UxSUmNxQ4caUd3F2WtH4yJT8ayPlJ8qvrhg4zWrgZfAj8/wDxVsjloR0P60JucE/nB7bdiIOYWu7J5Ej3T6U8hYkty1911kHcMJB+RkGhuL9m8Pc90G2eqHT8J09Io2r3UEXF7VfiVQGH9S5tfNfSn2rdq5/6bw3NTow80aGHzolGE9SQnExGM9l7q6oVuD8Deh0+tCL1t7Zy3FZD0YRPlO9ba9Zxvad021tqe+w76hdO6VIDl413CifCDfvvbcQXQjmCQQfMGuM+hXMH/JyTT+X5nnHa9RXc0861HFOEYI6i4tpj8Dgj8BP5RWev8NUN3bq3B1AIPkZ09DXH2KtfUb/kRKpCPLRVI8Kt4bCRDP8AIcz++pqWxZCaASep5f6au2MOW2M9Sf71u6f/AIy3v1uPH9zNPqb+7T2yGCSAB5Dlr/eiFnh2RO0ue71ideig7t56CNZgirdu3bszm1eJy7H/AFfCDPu7nnG1CsZfZ2LMx2IgEhQp0ygDSI0rr1PXKEe3S0jpR6TedTbJX4grjKqlFmSoO52LMY7zeJ+lZv2pdsqL2ggtokSzEagKR7vj10+buK8SFshEXPdb3VG/m0bD9+VfB4LIRcuEXLzMusghACGygctiP3r5tNzupSf+Tc22rF72X4FculHuwXWYn3LU8wB7zwAfM16TgeHW0CgIsrqCRLTzaTrmNYHA4+4jdxiNevdnrB0rX4TiNxrKi4ArHcjmOWnKa6Uqmbd+SsbFziOLXUCIG7Hw8enjWU/4zwSHvOfdLL3ZBUMyyPPKY8CKEe0fFftLtYtn+Spi64/xGH+Ep+H4jz26yLxJVwpZVKAdxSPe6Pr93p69It1VB79Of4Ie9IfjOIXLrtcFq0AxkDs1MLsupQzoBr+W1Kq3a0qy+1SFdeA7xvhd4OM11wnLLAzebGSNOVZziPG8twWSHa1bddC2o6nMJ5desxW7sYh3wilVF0m2ujmMxgAliZ8T1rDYt2zuL9rtU/5dpCLYO2cuEztAMSN+uprWqbe1wXKWg3xPEW8bbw4S4bThpFoKXc/dUqARCyPeZfTSjPsl9p7N1v8AvK8LLBmg6AMFJjYRJk6+E5IIbir2ltcNbUyBaaWaBlEzrMH7zaa6VHwLFW07W6HN1rYAtq0Krk7l9OR7wneNN6u6utk2fJoeLcHvG81xEBLtMZslpSNmu5Ya6dNuWg1FaLgdq5btjtLgZjuFACCdSFUQB50B9lOMNdzC7cV2J0GVURABMhmaW8jJ0ETqavca49bwyqzHOWIyoCMzBjEgHcV0la12JMq8V9ls2dsNAzqRct3CzW3LTsZjmdDImNoofaxwVfs+IRsMVEShyof6DuBsdJHjWvt3M4B20BgjbzU86yXtjhrOIvoputntCSigOwUGWOpAB0jvHXSNd+bi18I7hmzhrSkOERyBoW7x8DPP9xWd4zjMWl8N9qYaHRUhSN4hgUHj7x03FHfZ7gCK5NrFFrXO13XynxcNp8vU1Pc4xhQ7WcwLAlSkQCZmMzCCRsOnQkyCLV7yHLg8z4xYa65uOSzEzmJk+c0IxOZe9GcHc89iNxvvznn1r0D2j9mFvA9mcnMoCQJ89fqD8t6wuK4bew7EMGjy5dcvPzE+da1VT4M0qbTuTYfixZJJ++pkmD3ckRy20rZ+z/tdeRT3u1UFsqPoxXcANvzA1kVgLqI2rDKfiXY+f+9Kyz2wMoV0BJ03+moOm461alGXxK6ItJfDo9j4bxDCXGBQnC3W3WQoY8wRrbffmJo1w7A9kSFW2k6kpKhun8rZfk3yrxSxxRXZDmErJyOd/eUgv5Hn4Uf4F7SXsOLdsXCe73hc7ybSIk7nwPKuVTpb7g7o60+p9JqzPV8NdfMyuAPhhgcyjn1nUVbD1lOB+0uHuDMym2X+/q6trzY95RvodB1rQvibap2jXFyfFMqf6Y3PgKzOEo6aNClF7LqvVHjnEbNsBbgDsNVQe8DyM/c8/Ss3xb2nZ8yWBlgasffPSOSg+vlWXONBuKFOa4QZYk5J3ZurHx+td4UG9yOM6qWkbRjdxdtD2mS2ysRbg6ZWygsxMuToZNAeNYdbNxLbn3iJfLCKDzZyYGsDUjem8B9o7iJ/Ntvktqe+AJbPDLInuqNeR0Kk7GoOLcafEOFnKmpHVojYH+oHMfkBS9olT1F6/IUunhU3JBv/AIbCqWN9AvXKSPLeqn8OJzhVHcCmZjNIMkTGnL96ALqXwG7O9cGacxzlW9dj86oYLF4jDn/1HIUgqmoBOwBiQRryj5b0R66o3e/2J9joJNNP6mrwOCuOQBIB+sbwDsB1Og+lFLmMt2RFshnG7DZf6J3P+b0isb2+IbOz3IZ4lRpAWYWRy12286ge7cHvgkdd/r+tcuo6ydR2XAUenhS458h29iNSRJnmd9aB8V4sQezt966d/hTxPU+HrVTH8UdiLdqQTu0bA6aQN9P0qTBYVbYhd/vHnP75VgksVk0aOeC1gMOtrUMzXG99zzPQHeKe79+2vUk+UA7+tNt/vnFX+HWjcxKMyAWjbuZBAE5Tb/c86KSc53fhlPSDHAcD/iOO790Hn4nwof7UcYe45w1gmY/nXB/hg/dUj75n5eezvafjTKewsa3WGp5W1+I+MbD5+YTDNbsqEUkyZYkakndjzk/vnWiTVONlyKTI8TibVp0sRCBZIGoYbZf6Tz8NNjTbuJzmZn+1FGNq4sEAr0YAg+Yah2I4PbOqMyeRkejSB8opKVGcVGd181+5ynCqvhat4f8Ach7DzpVH/CrvK4Pw/wDzpUuzR/H9iMp/h+4f4b7QXAV7YKVOyoIyganXmddNhGnjWrtiQHUypEgf31/KlSrtTk2aXwCONcAS6pyqOpWYB8REa+B0rJ8TcWQLS25mREgDx15mlSrnUiskHoV/Z/ih7Z7fZq0lgUJItrlJBd987bDY/MCu8Wx74jErbu6dmS2RQNFGkz7uoA1Gu3d3FKlXaHLicX/Jv8JesgW7SNDZdAF2AzCSYA3U7egofa9l7QV+85a4CGfNzO5CEZZ1JBIMTSpV14WhsWB4ecMmt0i1azMqqCO6NZcgy7dTpO0EVWtY7D8QLi5ZZQmnaggOCdArAbyJPNdPKe0qiW+TrFe7+pR4jbxPDwCzrdszAmQQd1G5I0I2kb7VdwXErGKAQrJIkgjYjofqCI+RpUqzxk7krkD8U9jw7E2dzJKkxsJJnYwOuum5rO3sGuGBZiWYjugaKQdQfTmROu1KlWym3s51Erg5ES9Iy5LmpkagxvTLbXUJUkFQJIOq5Rzjf+9KlXaL/qOEkjV/xFYzPoDKi4k7sR906gz5+dXUushZ7jA25ORQNZOWJ8ob1HSlSrZJI4Qk7FHiONYqqARmSURTEgQAXc68xoPU1X4Tw65evBUMsJhiYhICkkGeR2GtKlWSt8SNFLa2bLhLWbHa2h/NYKhYuCFJJcQq6xtv4VzDY6y1w9rh0RYgNb0M6E93x09KVKsE5O5rQWHAFdQ1phDbZhy84/tUb+zwUS7qPJSd6VKhwiFxXeBqsjOugkyp2+U9KhxvCjZXMyBl5kERr56/SlSqHBDTYBxFnDsfddSeYOtRYfgT3M3YvJGpzd06nTUaHn0pUq5jZb4Lwm4bxF3u20WTEEsxOmx2hTU3thxXsTayDvMHVByAhdT4CBpSpVpjFJaJZnsP/KXMdbrE52JnMTrB9Nx08qgQyZY+fiaVKsU9vYUtz2aLhdy2VhR5iOfWrRRfhHpSpVlfJ60dx2M+zr0pUqVGTIxj4R//2Q==",
      message: 'shut up',
      likesInfo: '146',
    },
  ],

  newPostText: "",
};

export const profileReducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 5,
        message: state.newPostText,
        likesInfo: '0',
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW8kTnp3ZUx6MNsVhDbfsHRun5kVo5GVbCsWiI6JK0lTuSV6lG9dIvagZYB0bbjPtLkn0&usqp=CAU",
      };
      state.postsInfo.push(newPost);
      state.newPostText = '';
      return state;
    case UPDATE_POST_TEXT:
      state.newPostText = action.postMessage;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const updatePostTextActionCreator = (text) => {
  return {
    type: UPDATE_POST_TEXT,
    postMessage: text,
  };
};
