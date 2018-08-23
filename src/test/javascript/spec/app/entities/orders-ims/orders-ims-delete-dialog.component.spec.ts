/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { InventoryManagementSystemTestModule } from '../../../test.module';
import { OrdersImsDeleteDialogComponent } from 'app/entities/orders-ims/orders-ims-delete-dialog.component';
import { OrdersImsService } from 'app/entities/orders-ims/orders-ims.service';

describe('Component Tests', () => {
    describe('OrdersIms Management Delete Component', () => {
        let comp: OrdersImsDeleteDialogComponent;
        let fixture: ComponentFixture<OrdersImsDeleteDialogComponent>;
        let service: OrdersImsService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [InventoryManagementSystemTestModule],
                declarations: [OrdersImsDeleteDialogComponent]
            })
                .overrideTemplate(OrdersImsDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(OrdersImsDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(OrdersImsService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete', inject(
                [],
                fakeAsync(() => {
                    // GIVEN
                    spyOn(service, 'delete').and.returnValue(of({}));

                    // WHEN
                    comp.confirmDelete(123);
                    tick();

                    // THEN
                    expect(service.delete).toHaveBeenCalledWith(123);
                    expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                })
            ));
        });
    });
});
