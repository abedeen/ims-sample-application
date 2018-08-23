/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { InventoryManagementSystemTestModule } from '../../../test.module';
import { TenantImsDeleteDialogComponent } from 'app/entities/tenant-ims/tenant-ims-delete-dialog.component';
import { TenantImsService } from 'app/entities/tenant-ims/tenant-ims.service';

describe('Component Tests', () => {
    describe('TenantIms Management Delete Component', () => {
        let comp: TenantImsDeleteDialogComponent;
        let fixture: ComponentFixture<TenantImsDeleteDialogComponent>;
        let service: TenantImsService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [InventoryManagementSystemTestModule],
                declarations: [TenantImsDeleteDialogComponent]
            })
                .overrideTemplate(TenantImsDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(TenantImsDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(TenantImsService);
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
