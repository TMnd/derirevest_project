package org.derirevest.helpers;

import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.time.ZonedDateTime;

public class Helper {
    public static ZonedDateTime setDateTimeZone(){
        LocalDateTime now = LocalDateTime.now();
        return now.atZone(ZoneOffset.UTC);
    }
}
