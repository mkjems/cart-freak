#!/usr/bin/osascript
-- -*- applescript -*-
tell application "Google Chrome"
     set windowList to every window
         repeat with aWindow in windowList
                set tabList to every tab of aWindow
        repeat with atab in tabList
            if (URL of atab contains "cart-freak") then
                tell atab to reload
            end if
        end repeat
    end repeat
end tell