echo "Goging to build pmsplus-ui for Pad"
ng build --prod
tar -zcvf pmsplus-ui-pad-devel.tar.gz dist/
echo "======done======"
echo "please check pmsplus-ui-pad-devel.tar.gz"
echo "================"