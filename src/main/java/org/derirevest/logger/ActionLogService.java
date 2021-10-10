package org.derirevest.logger;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import io.quarkus.runtime.Startup;
import org.bson.Document;
import org.eclipse.microprofile.config.ConfigProvider;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import static java.time.format.DateTimeFormatter.RFC_1123_DATE_TIME;

@Startup
@ApplicationScoped
public class ActionLogService {
    @Inject
    MongoClient mongoClient;

    public void insertLog(ActionLog log){
        Document document = new Document()
                .append("type", log.getLogType())
                .append("header", log.getLogHeader())
                .append("message", log.getLogMsg())
                .append("time", log.getLogTime().format(RFC_1123_DATE_TIME))
                .append("code", log.hashCode());
        getCollection().insertOne(document);
    }

    private MongoCollection<Document> getCollection(){
        String db = ConfigProvider.getConfig().getValue("database.mongodb.databaseName",String.class);
        return mongoClient.getDatabase(db).getCollection("actionLog");
    }
}
