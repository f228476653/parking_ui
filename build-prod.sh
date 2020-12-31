for lang in zh en fr; do \
    ng build --output-path=dist/$lang \
             --aot \
             -prod \
             --bh /$lang/ \
             --i18n-file=src/i18n/messages.$lang.xlf \
             --i18n-format=xlf \
             --locale=$lang; \
done
