/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { InventoryManagementSystemTestModule } from '../../../test.module';
import { TenantImsUpdateComponent } from 'app/entities/tenant-ims/tenant-ims-update.component';
import { TenantImsService } from 'app/entities/tenant-ims/tenant-ims.service';
import { TenantIms } from 'app/shared/model/tenant-ims.model';

describe('Component Tests', () => {
    describe('TenantIms Management Update Component', () => {
        let comp: TenantImsUpdateComponent;
        let fixture: ComponentFixture<TenantImsUpdateComponent>;
        let service: TenantImsService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [InventoryManagementSystemTestModule],
                declarations: [TenantImsUpdateComponent]
            })
                .overrideTemplate(TenantImsUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(TenantImsUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(TenantImsService);
        });

        describe('save', () => {
            it(
                'Should call update service on save for existing entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new TenantIms(123);
                    spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.tenant = entity;
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
                    const entity = new TenantIms();
                    spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.tenant = entity;
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
