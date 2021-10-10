package org.derirevest.logger;

import java.time.ZonedDateTime;
import java.util.Objects;

public class ActionLog {
    private Integer idCode;
    private String logType;
    private String logHeader;
    private String logMsg;
    private ZonedDateTime logTime;

    public ActionLog(){
    }

    public ActionLog(String logType, String logHeader, String logMsg, ZonedDateTime logTime) {
        this.logType = logType;
        this.logHeader = logHeader;
        this.logMsg = logMsg;
        this.logTime = logTime;
        this.idCode = hashCode();
    }

    public String getLogType() {
        return logType;
    }

    public void setLogType(String logType) {
        this.logType = logType;
    }

    public String getLogHeader() {
        return logHeader;
    }

    public void setLogHeader(String logHeader) {
        this.logHeader = logHeader;
    }

    public String getLogMsg() {
        return logMsg;
    }

    public void setLogMsg(String logMsg) {
        this.logMsg = logMsg;
    }

    public ZonedDateTime getLogTime() {
        return logTime;
    }

    public void setLogTime(ZonedDateTime logTime) {
        this.logTime = logTime;
    }

    @Override
    public boolean equals(Object obj) {
        if (!(obj instanceof ActionLog)) {
            return false;
        }

        ActionLog other = (ActionLog) obj;

        return Objects.equals(other.idCode, this.idCode);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.logMsg);
    }

    @Override
    public String toString() {
        return "actionLog{" +
                "logType='" + logType + '\'' +
                ", logHeader='" + logHeader + '\'' +
                ", logMsg='" + logMsg + '\'' +
                ", logTime=" + logTime +
                '}';
    }
}
