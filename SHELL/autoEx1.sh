# Author: Keith Butterfield
# Started: 10/11/22
# End: 
# Summary: This is going to be a little small shell script that will run when executed I would like it to do the follow if I can
# 1) I would like it to start the Unity
# 1b) If possible Start Unity hub and from hub start Unity proper version for project
# 2) Start VS Code
# (maybe more to be added)

# Letting you know the script has started
echo "You are starting the script"


#So right now - this works.  Not quite the way I was expecting, so I think I will have to create a new script and call it to open Unity and return to this script
# Starting Unity
echo "Trying to start Unity"
exec "C:\Program Files\Unity Hub\Unity Hub.exe" & exit


# Start VS Code
echo "Trying to start VSCode"
exec "C:\Users\kbutt\AppData\Local\Programs\Microsoft VS Code\Code.exe" & exit
