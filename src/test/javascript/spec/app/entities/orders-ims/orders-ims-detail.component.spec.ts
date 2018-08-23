/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { InventoryManagementSystemTestModule } from '../../../test.module';
import { OrdersImsDetailComponent } from 'app/entities/orders-ims/orders-ims-detail.component';
import { OrdersIms } from 'app/shared/model/orders-ims.model';

describe('Component Tests', () => {
    describe('OrdersIms Management Detail Component', () => {
        let comp: OrdersImsDetailComponent;
        let fixture: ComponentFixture<OrdersImsDetailComponent>;
        const route = ({ data: of({ orders: new OrdersIms(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [InventoryManagementSystemTestModule],
                declarations: [OrdersImsDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(OrdersImsDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(OrdersImsDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.orders).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
