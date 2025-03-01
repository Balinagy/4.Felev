import turtle
def csigavonal(t, hossz, lépés):
 for i in range(lépés):
    t.forward(hossz) # szakasz
    t.right(90) # jobbra 90 fok
    hossz += 10 # a következő szakasz hossza
# Turtle beállítások
ablak = turtle.Screen() # Ablak létrehozása
ablak.bgcolor("white") # Háttérszín beállítása
csiga = turtle.Turtle() # Turtle létrehozása
csiga.speed(10) # Rajzolás sebessége
csigavonal(csiga, 10, 100) # Kezdő hossz, lépések száma
ablak.mainloop()