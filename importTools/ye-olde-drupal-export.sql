# most node data
SELECT
    n.type,
    n.title,
    fm.filename as featureImage,
    fm2.filename as topImage,
    fm3.filename as featureImage2,
    FROM_UNIXTIME(n.created, '%Y-%m-%d') AS yearMonthDay,
    DATE_FORMAT(fdfpd.field_publish_date_value, '%Y-%m-%d') AS setPublishDate,
    frb.body_value,
    (SELECT GROUP_CONCAT(DISTINCT ttd.name SEPARATOR ',') as tag FROM taxonomy_term_data ttd
     LEFT JOIN field_revision_field_tags frft ON frft.field_tags_tid = ttd.tid
     WHERE frft.revision_id = n.vid) as tags,
    (SELECT GROUP_CONCAT(DISTINCT ttd2.name SEPARATOR ',') as tag2 FROM taxonomy_term_data ttd2
     LEFT JOIN field_revision_field_technologies frft2 ON frft2.field_technologies_tid = ttd2.tid
     WHERE frft2.revision_id = n.vid) as tech_tags
FROM node n
LEFT JOIN field_revision_body frb ON frb.revision_id = n.vid
LEFT JOIN field_data_field_publish_date fdfpd ON fdfpd.entity_id = n.nid
LEFT JOIN field_revision_field_feature_image frffi ON frffi.entity_id = n.nid
LEFT JOIN file_managed fm ON fm.fid = frffi.field_feature_image_fid
LEFT JOIN field_revision_field_top_image frfti ON frfti.entity_id = n.nid
LEFT JOIN file_managed fm2 ON fm2.fid = frfti.field_top_image_fid 
LEFT JOIN field_data_field_image fdfi ON fdfi.entity_id = n.nid
LEFT JOIN file_managed fm3 ON fm3.fid = fdfi.field_image_fid 
WHERE n.type != 'basic_page'
AND n.type != 'quote'
ORDER BY n.type ASC, n.created ASC;

# image galleries
SELECT
	n.type,
    n.title,
    fm.filename
FROM node n
LEFT JOIN field_data_field_image_gallery fdfig ON fdfig.entity_id = n.nid
LEFT JOIN file_managed fm ON fm.fid = fdfig.field_image_gallery_fid
WHERE fm.filename IS NOT NULL
ORDER BY n.type ASC, n.created ASC, fdfig.delta ASC;