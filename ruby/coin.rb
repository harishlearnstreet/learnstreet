#$Coin Project
def isCorrect(rnd, n)
  #Gets a random number between 0 and n
  #if it's over 0.5, return true, else false
  #Replace this code with your method
     if rnd.to_f < n.to_f then
        return false
    else
        return true
    end
  
end

def addPoints(pts)
  #Increment pts by 1. Return pts
  #Replace this code with your method
    return pts+1;
      
end
