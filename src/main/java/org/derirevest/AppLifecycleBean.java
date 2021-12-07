package org.derirevest;

import io.quarkus.runtime.ShutdownEvent;
import io.quarkus.runtime.StartupEvent;
import org.derirevest.logger.ActionLog;
import org.derirevest.logger.ActionLogService;

import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.event.Observes;
import javax.inject.Inject;

import org.derirevest.helpers.Helper;

import java.util.logging.Logger;

@ApplicationScoped
public class AppLifecycleBean {
    private static final Logger LOGGER = Logger.getLogger("ListenerBean");

    @Inject
    ActionLogService actionLogService;

    void onStart(@Observes StartupEvent ev){
        ActionLog al = new ActionLog(
                "Application status",
                "Status - ON",
                "The application has turn on",
                Helper.setDateTimeZone()
        );
        actionLogService.insertLog(al);
        LOGGER.info("The application is starting...");
    }

    void onStop(@Observes ShutdownEvent ev) {
        ActionLog al = new ActionLog(
                "Application status",
                "Status - OFF",
                "The application has turn off",
                Helper.setDateTimeZone()
        );
        actionLogService.insertLog(al);
        LOGGER.info("The application is stopping...");
    }
}
