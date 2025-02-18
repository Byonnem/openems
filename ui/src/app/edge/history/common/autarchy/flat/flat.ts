import { Component } from '@angular/core';
import { AbstractFlatWidget } from 'src/app/shared/genericComponents/flat/abstract-flat-widget';
import { ChannelAddress, CurrentData, Utils } from '../../../../../shared/shared';

@Component({
    selector: 'autarchyWidget',
    templateUrl: './flat.html'
})
export class FlatComponent extends AbstractFlatWidget {

    public autarchyValue: number;

    protected override onCurrentData(currentData: CurrentData) {
        this.autarchyValue =
            Utils.calculateAutarchy(
                currentData.allComponents['_sum/GridBuyActiveEnergy'] / 1000,
                currentData.allComponents['_sum/ConsumptionActiveEnergy'] / 1000);
    }

    protected override getChannelAddresses(): ChannelAddress[] {
        return [
            new ChannelAddress('_sum', 'GridBuyActiveEnergy'),
            new ChannelAddress('_sum', 'ConsumptionActiveEnergy')
        ];
    }
}

