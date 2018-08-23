/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { InventoryManagementSystemTestModule } from '../../../test.module';
import { OrdersImsUpdateComponent } from 'app/entities/orders-ims/orders-ims-update.component';
import { OrdersImsService } from 'app/entities/orders-ims/orders-ims.service';
import { OrdersIms } from 'app/shared/model/orders-ims.model';

describe('Component Tests', () => {
    describe('OrdersIms Management Update Component', () => {
        let comp: OrdersImsUpdateComponent;
        let fixture: ComponentFixture<OrdersImsUpdateComponent>;
        let service: OrdersImsService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [InventoryManagementSystemTestModule],
                declarations: [OrdersImsUpdateComponent]
            })
                .overrideTemplate(OrdersImsUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(OrdersImsUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(OrdersImsService);
        });

        describe('save', () => {
            it(
                'Should call update service on save for existing entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new OrdersIms(123);
                    spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.orders = entity;
                    // WHEN
                    comp.save();
                    tick(); // simulate async

                    // THEN
                    expect(service.update).toHaveBeenCalledWith(entity);
                    expect(comp.isSaving).toEqual(false);
                })
            );

            it(
                'Should call create service on save for new entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new OrdersIms();
                    spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.orders = entity;
                    // WHEN
                    comp.save();
                    tick(); // simulate async

                    // THEN
                    expect(service.create).toHaveBeenCalledWith(entity);
                    expect(comp.isSaving).toEqual(false);
                })
            );
        });
    });
});
