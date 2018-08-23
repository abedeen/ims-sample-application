/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { InventoryManagementSystemTestModule } from '../../../test.module';
import { StockImsDetailComponent } from 'app/entities/stock-ims/stock-ims-detail.component';
import { StockIms } from 'app/shared/model/stock-ims.model';

describe('Component Tests', () => {
    describe('StockIms Management Detail Component', () => {
        let comp: StockImsDetailComponent;
        let fixture: ComponentFixture<StockImsDetailComponent>;
        const route = ({ data: of({ stock: new StockIms(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [InventoryManagementSystemTestModule],
                declarations: [StockImsDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(StockImsDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(StockImsDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.stock).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
